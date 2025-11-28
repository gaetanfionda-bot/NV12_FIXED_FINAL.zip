import { getProductBySlug } from "@/lib/db";
import TryOn3D from "@/components/TryOn3D";

export default async function ProductPage({ params }) {
  const { slug } = params;

  // Charger le produit
  const product = await getProductBySlug(slug);

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

      {/* Description */}
      <p style={{ marginTop: 10 }}>{product.description}</p>

      {/* Prix */}
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
              display: "block",
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

      {/* TRY-ON 3D */}
      <h2 style={{ marginTop: 40 }}>Try-On 3D</h2>

      <TryOn3D src={`/models/${product.id}.glb`} />

      {/* Retour */}
      <div style={{ marginTop: 30 }}>
        <a href="/shop">← Retour au shop</a>
      </div>
    </main>
  );
}
