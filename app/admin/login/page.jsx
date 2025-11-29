"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  useEffect(() => {
    // Accès direct sans mot de passe
    router.replace("/admin");
  }, [router]);

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      background: "black",
      color: "white",
      fontSize: "2rem"
    }}>
      <div>ACCÈS ADMIN…</div>
      <div style={{ fontSize: "1rem", marginTop: "1rem" }}>Redirection en cours…</div>
    </div>
  );
}
