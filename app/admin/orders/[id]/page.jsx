import { getAdminOrder } from "@/lib/admin-db";

export default async function OrderDetailPage({ params }) {
  const { id } = params;
  const order = await getAdminOrder(id);

  if (!order) {
    return (
      <main style={{ padding: 40 }}>
        <h1>Commande introuvable</h1>
        <a href="/admin/orders">← Retour</a>
      </main>
    );
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>Commande {order.id}</h1>
      <p>Date : {order.date}</p>
      <p>Total : {order.total} €</p>
      <p>Status : {order.status}</p>

      <h2 style={{ marginTop: 20 }}>Articles</h2>

      {order.items.map((item, idx) => (
        <div key={idx} style={{ marginBottom: 10 }}>
          {item.name} – {item.price} € × {item.qty}
        </div>
      ))}

      <div style={{ marginTop: 20 }}>
        <a href="/admin/orders">← Retour</a>
      </div>
    </main>
  );
}
