import { getAdminOrders } from "@/lib/admin-db";

export default async function AdminOrdersPage() {
  const orders = await getAdminOrders();

  return (
    <main style={{ padding: 40 }}>
      <h1>Commandes</h1>

      {orders.length === 0 && <p>Aucune commande.</p>}

      <ul style={{ marginTop: 20 }}>
        {orders.map((o) => (
          <li key={o.id} style={{ marginBottom: 10 }}>
            <strong>Commande {o.id}</strong> – {o.total} €
            <br />
            <a href={`/admin/orders/${o.id}`}>Voir</a> |
            <a href={`/admin/orders/delete/${o.id}`}> Supprimer</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
