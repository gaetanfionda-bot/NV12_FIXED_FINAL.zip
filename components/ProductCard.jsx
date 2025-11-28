"use client";

import { addToCart } from "@/lib/cart";

export default function ProductCard({ product }) {
  return (
    <div className="border border-white/10 bg-neutral-900 p-5 rounded-xl">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover rounded-md mb-4"
      />

      <h2 className="text-2xl font-semibold">{product.name}</h2>

      <p className="text-neutral-400 mt-2">{product.description}</p>

      <p className="text-xl font-bold mt-3">{product.price}€</p>

      <button
        className="mt-4 w-full bg-white text-black py-2 rounded-md font-semibold hover:bg-neutral-300 transition"
        onClick={() => {
          addToCart(product);
          alert("Ajouté au panier !");
        }}
      >
        Ajouter au panier
      </button>
    </div>
  );
}
