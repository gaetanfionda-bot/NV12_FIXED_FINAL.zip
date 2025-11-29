"use client";

import { useState } from "react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    // ENVOI AU BACKEND /api/admin/login
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      window.location.href = "/admin/products";
    } else {
      setError("Mot de passe incorrect");
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center",
      alignItems: "center", color: "white" }}>
      
      <form
        onSubmit={handleLogin}
        style={{
          padding: 20,
          background: "#111",
          border: "1px solid #333",
          borderRadius: 6,
          minWidth: 300,
        }}
      >
        <h1 style={{ marginBottom: 20 }}>Admin Login</h1>

        <input
          type="password"
          placeholder="Mot de passe admin"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 10,
            background: "#222",
            border: "1px solid #444",
            color: "white",
          }}
        />

        {error && (
          <p style={{ color: "red", marginBottom: 10 }}>{error}</p>
        )}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: 10,
            background: "red",
            border: "none",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Se connecter
        </button>
      </form>
    </div>
  );
}
