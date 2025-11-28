import { addAdminOrder } from "@/lib/admin-db";

export async function POST(request) {
  try {
    // Récupérer le JSON envoyé depuis le front
    const body = await request.json();

    // Ajouter la commande dans la base JSON
    await addAdminOrder(body);

    // Réponse OK
    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Erreur ajout commande :", err);

    return new Response(
      JSON.stringify({ ok: false, error: "ADD_ORDER_FAILED" }),
      { status: 500 }
    );
  }
}
