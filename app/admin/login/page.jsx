"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      window.location.href = "/admin";
    } else {
      setError("Mot de passe incorrect");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-900 p-8 rounded-xl border border-neutral-700 w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-4 text-red-600">Admin Login</h1>

        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full p-3 rounded bg-neutral-800 border border-neutral-700 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-400 mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 transition p-3 rounded font-semibold"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
}
