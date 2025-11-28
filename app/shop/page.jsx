import { getProducts } from "@/lib/db";

export default async function ShopPage() {
  // Sécurisation : si getProducts() renvoie undefined, null ou un objet → on force []
  let products = [];

  try {
    const data = await getProducts();
    if (Array.isArray(data)) {
      products = data;
    } else {
      console.error("⚠️ getProducts() n'a pas renvoyé un tableau :", data);
    }
  } catch (err) {
    console.error("⚠️ Erreur dans getProducts():", err);
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>Boutique NIGHT VISION</h1>

      {products.length === 0 && (
        <p>Aucun produit pour le moment.</p>
      )}

      <div style={{ marginTop: 20 }}>
        {products.map((product) => (
          <div key={product.id} style={{ marginBottom: 20 }}>
            <a href={`/shop/${product.slug}`}>
              <strong>{product.name}</strong>
            </a>
            <div>{product.price}€</div>
          </div>
        ))}
      </div>
    </main>
  );
}
