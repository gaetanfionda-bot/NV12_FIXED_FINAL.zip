export default function AdminPage() {
  return (
    <div className="px-6 py-10 text-white">
      <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>

      <p className="text-neutral-400 mb-10">
        Gestion complète : produits, commandes, calendrier, promotions.
      </p>

      <div className="grid gap-10 max-w-4xl">
        <div className="p-6 border border-white/10 rounded-xl bg-neutral-900">
          <h2 className="text-2xl font-semibold mb-2">📦 Produits</h2>
          <p className="text-neutral-400 mb-4">Gérer les produits du shop.</p>
          <a href="/admin/products" className="underline">
            Accéder aux produits
          </a>
        </div>

        <div className="p-6 border border-white/10 rounded-xl bg-neutral-900">
          <h2 className="text-2xl font-semibold mb-2">🧾 Commandes</h2>
          <p className="text-neutral-400 mb-4">Suivi et gestion des commandes.</p>
          <a href="/admin/orders" className="underline">
            Accéder aux commandes
          </a>
        </div>

        <div className="p-6 border border-white/10 rounded-xl bg-neutral-900">
          <h2 className="text-2xl font-semibold mb-2">📅 Calendrier</h2>
          <p className="text-neutral-400 mb-4">Évènements et réservations.</p>
          <a href="/admin/calendar" className="underline">
            Voir le calendrier
          </a>
        </div>

        <div className="p-6 border border-white/10 rounded-xl bg-neutral-900">
          <h2 className="text-2xl font-semibold mb-2">🎰 Roulette Promo</h2>
          <p className="text-neutral-400 mb-4">
            Gestion des probabilités, résultats, récompenses.
          </p>
          <a href="/admin/roulette" className="underline">
            Accéder à la roulette
          </a>
        </div>
      </div>
    </div>
  );
}
