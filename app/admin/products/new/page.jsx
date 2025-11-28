"use client";

import { useState } from "react";
import { addAdminProduct } from "@/lib/admin-db.js";
import { useRouter } from "next/navigation";

export default function NewProduct() {
  const router = useRouter();

  const [form, setForm] = useState({
    id: "",
    name: "",
    price: "",
    stock: "",
    description: "",
    image: ""
  });

  function handleSubmit() {
    if (!form.id || !form.name) {
      alert("ID et nom obligatoires.");
      return;
    }

    addAdminProduct({
      id: form.id,
      name: form.name,
      price: parseFloat(form.price),
      stock: parseInt(form.stock),
      description: form.description,
      image: form.image
    });

    router.push("/admin/products");
  }

  function updateField(field, value) {
    setForm({ ...form, [field]: value });
  }

  return (
    <div className="px-6 py-16 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Nouveau produit</h1>

      <div className="space-y-4">
        {[
          ["id", "ID (slug)"],
          ["name", "Nom"],
          ["price", "Prix"],
          ["stock", "Stock"],
          ["image", "URL Image"],
        ].map(([field, label]) => (
          <input
            key={field}
            type="text"
            placeholder={label}
            className="w-full p-3 bg-neutral-800 border border-white/10 rounded"
            onChange={(e) => updateField(field, e.target.value)}
          />
        ))}

        <textarea
          placeholder="Description"
          className="w-full p-3 bg-neutral-800 border border-white/10 rounded"
          onChange={(e) => updateField("description", e.target.value)}
        />

        <button
          className="w-full py-3 bg-white text-black rounded"
          onClick={handleSubmit}
        >
          Ajouter
        </button>
      </div>
    </div>
  );
}
