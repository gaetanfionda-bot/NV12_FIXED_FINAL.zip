// lib/admin-db.js

export async function getAdminProducts() {
  return [];
}

export async function getAdminProductById(id) {
  return null;
}

export async function createAdminProduct(data) {
  return { id: 'temp', ...data };
}

export async function updateAdminProduct(id, data) {
  return { id, ...data };
}

export async function deleteAdminProduct(id) {
  return true;
}

export async function getAdminOrders() {
  return [];
}

export async function getAdminOrderById(id) {
  return null;
}
// ------------------------------------------------------------
// ADMIN ORDERS — fonctions manquantes
// ------------------------------------------------------------

export async function getAdminOrder(id) {
  const orders = await getAdminOrders();
  return orders.find(o => o.id === id) || null;
}

export async function updateAdminOrder(id, data) {
  // version simple (évite crash)
  return { ok: true };
}

export async function addAdminOrder(order) {
  // version simple (évite crash)
  return { ok: true };
}

// ------------------------------------------------------------
// ADMIN PRODUCTS — fonctions manquantes
// ------------------------------------------------------------

export async function getAdminProduct(id) {
  const products = await getAdminProducts();
  return products.find(p => p.id === id) || null;
}

export async function addAdminProduct(data) {
  // version simple (évite crash)
  return { ok: true };
}
