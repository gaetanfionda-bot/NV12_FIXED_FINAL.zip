import { deleteAdminOrder, getAdminOrder } from "@/lib/admin-db";

export default async function DeleteOrderPage({ params }) {
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

  await deleteAdminOrder(id);

  return (
    <main style={{ padding: 40 }}>
      <h1>Commande supprimée</h1>
      <p>ID : {id}</p>
      <a href="/admin/orders">← Retour aux commandes</a>
    </main>
  );
}
