export default function ProductsLayout({ children }) {
  return (
    <div className="px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Gestion des produits</h1>
      {children}
    </div>
  );
}
