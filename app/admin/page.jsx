// app/admin/page.jsx
export default function AdminHome() {
  return (
    <div style={{ padding: "40px", color: "#fff" }}>
      <h1 style={{ fontSize: "32px", color: "#cc1010" }}>Dashboard Admin</h1>
      <p>Accès direct sans mot de passe.</p>

      <ul style={{ marginTop: "20px", lineHeight: "32px" }}>
        <li><a href="/admin/products">📦 Gérer les produits</a></li>
        <li><a href="/admin/orders">🧾 Gérer les commandes</a></li>
      </ul>
    </div>
  );
}
