"use client";

import Link from "next/link";
import { getAdminProducts } from "@/lib/admin-db.js";

export default function AdminProducts() {
  const products = getAdminProducts(); // ⭐ PREND LES PRODUITS ADMIN

  return (
    <div className="px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">Produits</h1>

      <Link
        href="/admin/products/new"
        className="px-4 py-2 bg-white text-black rounded mb-6 inline-block"
      >
        Ajouter un produit
      </Link>

      <div className="space-y-6 mt-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="border border-white/10 bg-neutral-900 p-4 rounded-xl flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl">{p.name}</h2>
              <p className="text-neutral-400">
                {p.price}€ — Stock : {p.stock}
              </p>
            </div>

            <div className="flex gap-4">
              <Link href={`/admin/products/${p.id}`} className="text-blue-400">
                Modifier
              </Link>

              <Link
                href={`/admin/products/delete/${p.id}`}
                className="text-red-400"
              >
                Supprimer
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
