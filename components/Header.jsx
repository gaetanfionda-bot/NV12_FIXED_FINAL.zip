"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-black/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold tracking-widest">
        NIGHT VISION
      </Link>

      <nav className="flex items-center gap-6 text-sm">
        <Link href="/shop">Shop</Link>
        <Link href="/roulette">Roulette</Link>
        <Link href="/calendar">Calendrier</Link>
        <Link href="/account">Compte</Link>
        <Link href="/admin" className="text-red-400">Admin</Link>
      </nav>
    </header>
  );
}
// Header component
