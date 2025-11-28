"use client";

import { useEffect, useState } from "react";

export default function CheckoutPage() {
  const [cart, setCart] = useState([]);
  const delivery = 3.5;

  // Charger le panier
  useEffect(() => {
    const stored = localStorage.getItem("nv_cart");
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  const subtotal = cart.reduce((sum, item) => sum + (item.price || 0), 0);
  const total = subtotal + (cart.length > 0 ? delivery : 0);

  function payNow() {
    // Pas de paiement réel encore → redirection
    window.location.href = "/checkout/success";
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>Récapitulatif de la commande</h1>

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
            <div>Prix : {item.price} €</div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div style={{ marginTop: 30 }}>
          <p>Sous-total : {subtotal.toFixed(2)} €</p>
          <p>Livraison : {delivery.toFixed(2)} €</p>
          <h2>Total : {total.toFixed(2)} €</h2>

          <button
            onClick={payNow}
            style={{
              marginTop: 20,
              background: "#cc1010",
              color: "white",
              padding: "10px 20px",
              borderRadius: 8,
              border: "none",
            }}
          >
            Procéder au paiement →
          </button>
        </div>
      )}
    </main>
  );
}
