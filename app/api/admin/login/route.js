// app/api/admin/login/route.js
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { password } = await request.json();

    // Lire le password de l'ENV
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

    if (!ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: "ADMIN_PASSWORD non configuré" },
        { status: 500 }
      );
    }

    // Vérif du mot de passe
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: "Mot de passe incorrect" },
        { status: 401 }
      );
    }

    // Cookie de session admin (non sécurisé mais suffisant pour V1)
    const response = NextResponse.json({ success: true });

    response.cookies.set({
      name: "admin_auth",
      value: "true",
      path: "/",
      httpOnly: true,
      maxAge: 60 * 60 * 24, // 24h
    });

    return response;
  } catch (error) {
    console.error("Erreur API admin/login:", error);
    return NextResponse.json(
      { error: "Erreur interne" },
      { status: 500 }
    );
  }
}
