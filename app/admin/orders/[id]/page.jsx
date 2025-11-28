"use client";

import { getAdminOrder, updateAdminOrder } from "@/lib/admin-db.js";
import { useRouter } from "next/navigation";

export default function AdminOrderDetails({ params }) {
  const order = getAdminOrder(params.id);
  const router = useRouter();

  if (!order)
    return (
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-6">Commande introuvable</h1>
        <p>Aucune commande trouvée avec cet identifiant.</p>
      </div>
    );

  const nextStatus = (current) => {
    if (current === "En attente") return "Envoyée";
    if (current === "Envoyée") return "Terminée";
    return "Terminée";
  };

  function updateStatus() {
    updateAdminOrder(order.id, { status: nextStatus(order.status) });
    router.push("/admin/orders");
  }

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Commande : {order.id}</h1>

      <p className="mb-2">
        <strong>Client :</strong> {order.customer}
      </p>

      <p className="mb-2">
        <strong>Total :</strong> {order.total}€
      </p>

      <p className="mb-4">
        <strong>Statut :</strong>{" "}
        <span className="text-blue-400">{order.status}</span>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Articles</h2>

      <div className="space-y-3">
        {order.items.map((item) => (
          <div
            key={item.id}
            className="border border-white/10 bg-neutral-900 p-3 rounded-lg"
          >
            <p>
              <strong>{item.name}</strong>
            </p>
            <p>
              {item.price}€ × {item.quantity}
            </p>
          </div>
        ))}
      </div>

      <button
        className="mt-8 w-full py-3 bg-white text-black rounded-lg hover:bg-neutral-300 transition"
        onClick={updateStatus}
      >
        Passer à : {nextStatus(order.status)}
      </button>
    </div>
  );
}
