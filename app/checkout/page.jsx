"use client";

import { useState } from "react";
import { getCart, clearCart } from "@/lib/cart";

export default function CheckoutPage() {
  const cart = getCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [mode, setMode] = useState("guest"); // guest | account
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");

  async function submitOrder() {
    const body = {
      items: cart,
      total,
      mode,
      userId: mode === "account" ? userId : null,
    };

    const res = await fetch("/api/orders", {
      method: "POST",
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (data.error) {
      alert(data.error);
      return;
    }

    clearCart();
    alert("Commande validée !");
window.location.href = `/checkout/success?orderId=${data.order.id}`;

  }

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Paiement</h1>

      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Votre panier :</h2>
        {cart.map((item) => (
          <div key={item.id} className="border border-white/10 p-3 rounded mb-2">
            <p className="text-lg">{item.name}</p>
            <p className="text-neutral-400">
              {item.price}€ × {item.quantity}
            </p>
          </div>
        ))}

        <p className="text-2xl font-semibold mt-4">Total : {total}€</p>
      </div>

      {/* Mode de commande */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Mode de commande :</h2>

        <div className="flex gap-4">
          <button
            className={`px-4 py-2 rounded ${
              mode === "guest" ? "bg-white text-black" : "bg-neutral-700"
            }`}
            onClick={() => setMode("guest")}
          >
            Invité
          </button>

          <button
            className={`px-4 py-2 rounded ${
              mode === "account" ? "bg-white text-black" : "bg-neutral-700"
            }`}
            onClick={() => setMode("account")}
          >
            Compte
          </button>
        </div>
      </div>

      {/* MODE COMPTE */}
      {mode === "account" && (
        <div className="mb-6">
          <p className="mb-2 text-neutral-400">
            Entrez votre identifiant utilisateur (userId)
          </p>
          <input
            type="text"
            placeholder="Votre ID"
            className="w-full p-2 rounded bg-neutral-800"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
      )}

      <button
        onClick={submitOrder}
        className="px-6 py-3 bg-white text-black rounded-lg hover:bg-neutral-300 transition"
      >
        Valider la commande
      </button>
    </div>
  );
}
