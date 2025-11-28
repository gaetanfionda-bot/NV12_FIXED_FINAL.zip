import ProductCard from "@/components/ProductCard";
import { getAdminProducts } from "@/lib/admin-db.js";

export default async function ShopPage() {
  // On attend la Promise
  const products = await getAdminProducts();

  // On sécurise : si ce n'est pas un array → on force un tableau vide
  const list = Array.isArray(products) ? products : [];

  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">Boutique NV</h1>

      {list.length === 0 && (
        <p className="text-center text-neutral-400">
          Aucun produit disponible pour le moment.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
