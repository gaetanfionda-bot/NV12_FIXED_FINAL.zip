import { deleteAdminProduct, getAdminProduct } from "@/lib/admin-db";

export default async function DeleteProductPage({ params }) {
  const { id } = params;

  // Charger le produit pour l'affichage
  const product = await getAdminProduct(id);

  if (!product) {
    return (
      <main style={{ padding: 40 }}>
        <h1>Produit introuvable</h1>
        <a href="/admin/products">← Retour</a>
      </main>
    );
  }

  // Supprimer immédiatement et rediriger
  await deleteAdminProduct(id);

  return (
    <main style={{ padding: 40 }}>
      <h1>Produit supprimé</h1>
      <p>{product.name} a été supprimé.</p>
      <a href="/admin/products">← Retour à la liste</a>
    </main>
  );
}
