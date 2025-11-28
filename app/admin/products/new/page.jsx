"use client";

import { useState } from "react";

export default function NewProductPage() {
  const [form, setForm] = useState({
    id: "",
    slug: "",
    name: "",
    price: 0,
    description: "",
    published: true,
    images: []
  });

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("/api/admin/products/new", {
      method: "POST",
      body: JSON.stringify(form)
    });

    window.location.href = "/admin/products";
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>Nouveau produit</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <label>ID</label>
        <input
          value={form.id}
          onChange={(e) => setForm({ ...form, id: e.target.value })}
        />

        <label>Slug</label>
        <input
          value={form.slug}
          onChange={(e) => setForm({ ...form, slug: e.target.value })}
        />

        <label>Nom</label>
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <label>Prix</label>
        <input
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
        />

        <label>Description</label>
        <textarea
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <button
          type="submit"
          style={{
            marginTop: 20,
            background: "#cc1010",
            color: "white",
            padding: "10px 20px",
            borderRadius: 6
          }}
        >
          Ajouter
        </button>
      </form>
    </main>
  );
}
