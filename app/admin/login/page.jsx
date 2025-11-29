// app/admin/login/page.jsx

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  // Redirection automatique vers le dashboard
  useEffect(() => {
    router.replace("/admin/dashboard");
  }, [router]);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Accès Admin…</h1>
      <p>Redirection en cours…</p>
    </div>
  );
}
