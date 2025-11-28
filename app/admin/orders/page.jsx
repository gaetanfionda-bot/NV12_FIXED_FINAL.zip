"use client";

import { getAdminOrders, updateAdminOrder } from "@/lib/admin-db.js";

export default function AdminOrdersPage() {
  const orders = getAdminOrders();

  if (orders.length === 0)
    return (
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-6">Commandes</h1>
        <p>Aucune commande pour le moment.</p>
      </div>
    );

  const nextStatus = (current) => {
    if (current === "En attente") return "Envoyée";
    if (current === "Envoyée") return "Terminée";
    return "Terminée";
  };

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-10">Commandes</h1>

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border border-white/10 bg-neutral-900 p-4 rounded-xl"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">{order.id}</h2>
              <p className="text-neutral-400 text-sm">
                {new Date(order.date).toLocaleString("fr-FR")}
              </p>
            </div>

            <p className="mb-2">
              <span className="font-semibold">Client :</span> {order.customer}
            </p>

            <p className="mb-2">
              <span className="font-semibold">Total :</span> {order.total}€
            </p>

            <p className="mb-4">
              <span className="font-semibold">Statut :</span>{" "}
              <span className="text-blue-400">{order.status}</span>
            </p>

            <button
              className="px-4 py-2 bg-white text-black rounded-lg hover:bg-neutral-300 transition"
              onClick={() => {
                updateAdminOrder(order.id, {
                  status: nextStatus(order.status),
                });
                location.reload();
              }}
            >
              Passer à : {nextStatus(order.status)}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
