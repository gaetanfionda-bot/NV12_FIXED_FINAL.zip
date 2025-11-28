import { getProducts } from "@/lib/db";

export async function GET() {
  try {
    const products = await getProducts();

    return new Response(
      JSON.stringify({
        ok: true,
        products: Array.isArray(products) ? products : [],
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur API /products :", error);

    return new Response(
      JSON.stringify({
        ok: false,
        products: [],
        error: "INTERNAL_ERROR",
      }),
      { status: 500 }
    );
  }
}
