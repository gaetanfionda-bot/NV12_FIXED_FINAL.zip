"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const ok = localStorage.getItem("nv_admin_auth") === "true";

    if (!ok) {
      router.push("/admin/login");
    } else {
      setAuth(true);
    }
  }, []);

  if (!auth) return null;

  return <>{children}</>;
}
