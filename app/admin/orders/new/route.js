import { addAdminOrder } from "@/lib/admin-db.js";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  const id = "order-" + Math.floor(Math.random() * 999999);

  addAdminOrder({
    id,
    items: body.items,
    total: body.total,
    customer: body.customer || "Client",
    status: "En attente",
    date: new Date().toISOString()
  });

  return NextResponse.json({ success: true, id });
}
