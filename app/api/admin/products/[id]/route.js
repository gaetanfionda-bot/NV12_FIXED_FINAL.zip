import { 
  getAdminProduct, 
  updateAdminProduct, 
  deleteAdminProduct 
} from "@/lib/admin-db";

export async function GET(request, { params }) {
  try {
    const product = await getAdminProduct(params.id);

    return new Response(
      JSON.stringify({ ok: true, product }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Erreur GET produit:", err);
    return new Response(
      JSON.stringify({ ok: false, error: "GET_FAILED" }),
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const body = await request.json();
    await updateAdminProduct(params.id, body);

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Erreur UPDATE produit:", err);
    return new Response(
      JSON.stringify({ ok: false, error: "UPDATE_FAILED" }),
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    await deleteAdminProduct(params.id);

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Erreur DELETE produit:", err);
    return new Response(
      JSON.stringify({ ok: false, error: "DELETE_FAILED" }),
      { status: 500 }
    );
  }
}
