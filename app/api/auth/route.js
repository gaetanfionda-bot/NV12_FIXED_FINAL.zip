export async function GET() {
  return new Response(
    JSON.stringify({
      adminPassword: process.env.ADMIN_PASSWORD || "undefined",
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
