import { getProductBySlug } from "@/lib/db";

export default async function ProductPage({ params }) {
  const { slug } = params;

  // On récupère le produit correspondant au slug
  const product = await getProductBySlug(slug);

  // Sécurisation : slug incorrect ou produit inexistant
  if (!product) {
    return (
      <main style={{ padding: 40 }}>
        <h1>Produit introuvable</h1>
        <p>Le produit demandé n'existe pas ou n'est pas publié.</p>
        <a href="/shop">← Retour au shop</a>
      </main>
    );
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>{product.name}</h1>
      <p style={{ marginTop: 10 }}>{product.description}</p>
      <p style={{ marginTop: 10, fontSize: "1.4rem" }}>
        <strong>{product.price} €</strong>
      </p>

      {/* Images */}
      <div style={{ marginTop: 30 }}>
        {product.images?.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={product.name}
            style={{
              width: "300px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />
        ))}
      </div>

      {/* Bouton Ajouter au panier */}
      <a
        href={`/cart?add=${product.id}`}
        style={{
          display: "inline-block",
          background: "#cc1010",
          color: "white",
          padding: "10px 20px",
          borderRadius: "8px",
          marginTop: "20px",
        }}
      >
        Ajouter au panier
      </a>

      <div style={{ marginTop: 20 }}>
        <a href="/shop">← Retour au shop</a>
      </div>
    </main>
  );
}
