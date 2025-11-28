import { addAdminOrder } from "@/lib/admin-db.js";
import { createGuestUser, getUserById } from "@/lib/users";

export async function POST(req) {
  try {
    const body = await req.json();
    const { items, total, userId, mode } = body;

    if (!items || items.length === 0) {
      return new Response(JSON.stringify({ error: "Panier vide." }), { status: 400 });
    }

    let finalUserId = userId;

    if (mode === "account") {
      const user = getUserById(userId);
      if (!user) {
        return new Response(JSON.stringify({ error: "Utilisateur inconnu." }), { status: 400 });
      }
    }

    if (mode === "guest") {
      const guest = createGuestUser();
      finalUserId = guest.id;
    }

    const order = {
      id: "ord-" + Math.random().toString(36).substring(2, 9),
      items,
      total,
      userId: finalUserId,
      status: "En attente",
      date: Date.now(),
      customer: mode === "guest" ? "Invité" : getUserById(finalUserId)?.email || "Utilisateur",
    };

    addAdminOrder(order);

    return new Response(JSON.stringify({ success: true, order }), {
      status: 200,
    });
  } catch (error) {
    console.error("Erreur API commande :", error);
    return new Response(JSON.stringify({ error: "Erreur serveur" }), { status: 500 });
  }
}
