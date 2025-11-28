"use client";

import { useEffect, useState } from "react";

export default function EditProductPage({ params }) {
  const { id } = params;
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(true);

  // Charger le produit depuis l'API admin
  useEffect(() => {
    async function load() {
      const res = await fetch(`/api/admin/products/${id}`);
      const data = await res.json();
      setForm(data.product);
      setLoading(false);
    }
    load();
  }, [id]);

  if (loading || !form) {
    return (
      <main style={{ padding: 40 }}>
        <h1>Chargement…</h1>
      </main>
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch(`/api/admin/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(form),
    });

    window.location.href = "/admin/products";
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>Modifier le produit : {form.name}</h1>

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

        <label>Prix (€)</label>
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

        <label>Publié ?</label>
        <select
          value={form.published}
          onChange={(e) =>
            setForm({ ...form, published: e.target.value === "true" })
          }
        >
          <option value="true">Oui</option>
          <option value="false">Non</option>
        </select>

        <button
          type="submit"
          style={{
            marginTop: 20,
            background: "#cc1010",
            color: "white",
            padding: "10px 20px",
            borderRadius: 6,
          }}
        >
          Enregistrer
        </button>
      </form>
    </main>
  );
}
