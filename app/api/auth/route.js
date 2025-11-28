export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

export async function POST(request) {
  const { password } = await request.json();

  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

  if (!ADMIN_PASSWORD) {
    console.error("❌ ADMIN_PASSWORD n'est pas défini dans Vercel !");
    return NextResponse.json(
      { success: false, message: "Config error" },
      { status: 500 }
    );
  }

  if (password === ADMIN_PASSWORD) {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json(
    { success: false, message: "Wrong password" },
    { status: 401 }
  );
}
