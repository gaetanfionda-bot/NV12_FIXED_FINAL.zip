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
