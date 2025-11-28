import {
  getAdminOrder,
  updateAdminOrder,
  deleteAdminOrder
} from "@/lib/admin-db";

export async function GET(request, { params }) {
  const order = await getAdminOrder(params.id);
  return new Response(JSON.stringify({ ok: true, order }), { status: 200 });
}

export async function PUT(request, { params }) {
  const body = await request.json();
  await updateAdminOrder(params.id, body);
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}

export async function DELETE(request, { params }) {
  await deleteAdminOrder(params.id);
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
