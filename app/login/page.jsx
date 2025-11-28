"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleLogin() {
    if (password === "night@vision69") {
      localStorage.setItem("nv_admin_auth", "true");
      router.push("/admin");
    } else {
      alert("Mot de passe incorrect.");
    }
  }

  return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className="bg-neutral-900 p-10 rounded-xl border border-white/10 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Admin NV</h1>

        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full mb-4 p-3 rounded bg-neutral-800 border border-white/10"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full py-3 bg-white text-black font-semibold rounded"
        >
          Se connecter
        </button>
      </div>
    </div>
  );
}
