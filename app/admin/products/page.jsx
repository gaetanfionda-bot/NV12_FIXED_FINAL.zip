import { getAdminProducts } from "@/lib/admin-db";

export default async function AdminProducts() {
  const products = await getAdminProducts();

  return (
    <main style={{ padding: 40 }}>
      <h1>Produits</h1>

      <a
        href="/admin/products/new"
        style={{
          display: "inline-block",
          marginBottom: 20,
          background: "#cc1010",
          padding: "8px 14px",
          color: "white",
          borderRadius: 6,
        }}
      >
        Ajouter un produit
      </a>

      {products.length === 0 && <p>Aucun produit.</p>}

      <ul style={{ marginTop: 20 }}>
        {products.map((p) => (
          <li key={p.id} style={{ marginBottom: 10 }}>
            <strong>{p.name}</strong> – {p.price} €
            <br/>
            <a href={`/admin/products/${p.id}`}>Modifier</a> |
            <a href={`/admin/products/delete/${p.id}`}> Supprimer</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
