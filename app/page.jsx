export default function Home() {
  return (
    <div className="w-full px-6 py-20">
      <section className="text-center mb-24">
        <h1 className="text-5xl font-bold mb-6 tracking-widest">
          NIGHT VISION V12
        </h1>
        <p className="text-neutral-400 text-lg">
          Plateforme modulaire — eShop, Admin, Roulette, Calendrier, Codes Promo.
        </p>
      </section>

      <section className="grid gap-10 max-w-5xl mx-auto">
        <div className="p-6 border border-white/10 rounded-xl bg-neutral-900">
          <h2 className="text-2xl font-semibold mb-2">🛒 eShop</h2>
          <p className="text-neutral-400 mb-4">
            Gestion produits, panier, checkout, promotions, codes promo.
          </p>
          <a href="/shop" className="underline">Accéder au shop</a>
        </div>

        <div className="p-6 border border-white/10 rounded-xl bg-neutral-900">
          <h2 className="text-2xl font-semibold mb-2">🎰 Roulette NV</h2>
          <p className="text-neutral-400 mb-4">
            Spins, probabilités, récompenses, intégrée au système promo.
          </p>
          <a href="/roulette" className="underline">Accéder à la roulette</a>
        </div>

        <div className="p-6 border border-white/10 rounded-xl bg-neutral-900">
          <h2 className="text-2xl font-semibold mb-2">📅 Calendrier</h2>
          <p className="text-neutral-400 mb-4">
            Événements, réservations, système admin synchronisé.
          </p>
          <a href="/calendar" className="underline">Voir le calendrier</a>
        </div>

        <div className="p-6 border border-white/10 rounded-xl bg-neutral-900">
          <h2 className="text-2xl font-semibold mb-2">🔑 Administration</h2>
          <p className="text-neutral-400 mb-4">
            Dashboard complet : produits, commandes, clients, roulette, promo, calendrier.
          </p>
          <a href="/admin" className="underline">Accéder à l’admin</a>
        </div>
      </section>
    </div>
  );
}
