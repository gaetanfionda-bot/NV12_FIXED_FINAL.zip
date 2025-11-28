export default function SuccessPage() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Merci pour votre commande !</h1>
      <p>Votre commande a bien été enregistrée.</p>

      <a href="/shop" style={{ marginTop: 20, display: "inline-block" }}>
        ← Retour au shop
      </a>
    </main>
  );
}
