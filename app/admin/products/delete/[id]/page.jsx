"use client";

import { deleteAdminProduct } from "@/lib/admin-db.js";
import { useRouter } from "next/navigation";

export default function DeleteProduct({ params }) {
  const router = useRouter();

  function handleDelete() {
    deleteAdminProduct(params.id);
    router.push("/admin/products");
  }

  return (
    <div className="px-6 py-16 max-w-lg mx-auto">
      <h1 className="text-3xl mb-6">Supprimer ce produit ?</h1>

      <p className="text-neutral-400 mb-6">
        Cette action est irréversible.
      </p>

      <button
        onClick={handleDelete}
        className="w-full py-3 bg-red-600 text-white rounded"
      >
        Supprimer définitivement
      </button>
    </div>
  );
}
