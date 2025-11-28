"use client";

import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const delivery = 3.5;

  // Chargement + ajout automatique ?add=
  useEffect(() => {
    // Récupérer paramètres URL
    const params = new URLSearchParams(window.location.search);
    const addId = params.get("add");

    // Charger panier existant
    const stored = localStorage.getItem("nv_cart");
    let cartData = stored ? JSON.parse(stored) : [];

    // Si URL contient ?add=xxxx → ajouter l’item
    if (addId) {
      const exists = cartData.find((item) => item.id === addId);
      if (!exists) {
        // Ajouter item temporaire (sera mis à jour après)
        cartData.push({
          id: addId,
          name: addId,
          price: 0,
        });
      }

      // Sauvegarde
      localStorage.setItem("nv_cart", JSON.stringify(cartData));
    }

    setCart(cartData);

    // Mettre à jour infos produits (prix + nom)
    async function updateItems() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();

        const updated = cartData.map((item) => {
          const p = data.products.find((x) => x.id === item.id);
          return p ? p : item;
        });

        setCart(updated);
        localStorage.setItem("nv_cart", JSON.stringify(updated));
      } catch (e) {
        console.error("Erreur chargement produits:", e);
      }
    }

    updateItems();
  }, []);

  // Suppression d’un produit
  function removeItem(id) {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("nv_cart", JSON.stringify(updated));
  }

  // Totaux
  const subtotal = cart.reduce((sum, item) => sum + (item.price || 0), 0);
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
