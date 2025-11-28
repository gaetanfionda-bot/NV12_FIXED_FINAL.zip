import { addAdminProduct } from "@/lib/admin-db";

export async function POST(request) {
  try {
    const body = await request.json();

    await addAdminProduct(body);

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Erreur ajout produit:", err);
    return new Response(
      JSON.stringify({ ok: false, error: "ADD_FAILED" }),
      { status: 500 }
    );
  }
}
