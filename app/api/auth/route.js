export async function POST(req) {
  const { password } = await req.json();

  // Récupère le mot de passe dans Vercel
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    console.error("⚠️ ADMIN_PASSWORD n'est pas définie !");
    return new Response("Config error", { status: 500 });
  }

  if (password === adminPassword) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ ok: false }), {
    status: 401,
    headers: { "Content-Type": "application/json" },
  });
}
