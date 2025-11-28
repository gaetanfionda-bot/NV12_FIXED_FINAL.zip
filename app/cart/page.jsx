"use client";

import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const delivery = 3.5;

  // Chargement du panier depuis localStorage
  useEffect(() => {
    const stored = localStorage.getItem("nv_cart");
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  // Suppression d’un produit
  function removeItem(id) {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("nv_cart", JSON.stringify(updated));
  }

  // Total panier
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const total = subtotal + (cart.length > 0 ? delivery : 0);

  return (
    <main style={{ padding: 40 }}>
      <h1>Votre Panier</h1>

      {cart.length === 0 && <p>Votre panier est vide.</p>}

      <div style={{ marginTop: 20 }}>
        {cart.map((item) => (
          <div
            key={item.id}
            style={{
              marginBottom: 20,
              padding: 10,
              border: "1px solid #ccc",
              borderRadius: 8,
            }}
          >
            <strong>{item.name}</strong>
            <div>{item.price} €</div>

            <button
              onClick={() => removeItem(item.id)}
              style={{
                marginTop: 10,
                background: "#cc1010",
                color: "white",
                padding: "6px 12px",
                borderRadius: 6,
                border: "none",
              }}
            >
              Retirer
            </button>
          </div>
        ))}
      </div>

      {/* Totaux */}
      {cart.length > 0 && (
        <div style={{ marginTop: 30 }}>
          <p>Sous-total : {subtotal.toFixed(2)} €</p>
          <p>Livraison : {delivery.toFixed(2)} €</p>
          <h2>Total : {total.toFixed(2)} €</h2>

          <a
            href="/checkout"
            style={{
              display: "inline-block",
              marginTop: 20,
              padding: "10px 20px",
              background: "#cc1010",
              color: "white",
              borderRadius: 8,
            }}
          >
            Passer au paiement →
          </a>
        </div>
      )}
    </main>
  );
}
