export async function POST(req) {
  const { password } = await req.json();

  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return new Response(
      JSON.stringify({ error: "ADMIN_PASSWORD non défini" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  if (password === adminPassword) {
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }

  return new Response(
    JSON.stringify({ error: "Mot de passe incorrect" }),
    { status: 401, headers: { "Content-Type": "application/json" } }
  );
}
