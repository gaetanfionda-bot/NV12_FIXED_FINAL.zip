import { NextResponse } from "next/server";

export function middleware(request) {
  const url = new URL(request.url);

  // Routes protégées : tout /admin sauf /admin/login
  const isAdminRoute = url.pathname.startsWith("/admin") && !url.pathname.startsWith("/admin/login");

  // Vérifier cookie admin
  const adminCookie = request.cookies.get("admin_auth")?.value;

  if (isAdminRoute && adminCookie !== "true") {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

// Pages protégées
export const config = {
  matcher: ["/admin/:path*"],
};
