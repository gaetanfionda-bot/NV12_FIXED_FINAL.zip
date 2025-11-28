"use client";

import { getAdminProduct } from "@/lib/admin-db.js";
import { addToCart } from "@/lib/cart";

export default function ProductPage({ params }) {
  const product = getAdminProduct(params.slug);

  if (!product)
    return <div className="p-10">Produit introuvable.</div>;

  return (
    <div className="px-6 py-16 flex gap-10 max-w-4xl mx-auto">
      <img
        src={product.image}
        alt={product.name}
        className="w-96 h-96 object-cover rounded-xl"
      />

      <div>
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-neutral-400 mb-6">{product.description}</p>

        <p className="text-2xl font-semibold mb-6">{product.price}€</p>

        <button
          className="px-6 py-3 bg-white text-black rounded-lg hover:bg-neutral-300 transition"
          onClick={() => {
            addToCart(product);
            alert("Ajouté au panier !");
          }}
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}
