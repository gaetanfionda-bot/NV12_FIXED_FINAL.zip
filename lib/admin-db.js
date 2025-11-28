import fs from "fs";
import path from "path";

// Référence du fichier JSON
const DB_PATH = path.join(process.cwd(), "lib/data/products.json");

// Charger la base produit
function loadDB() {
  const raw = fs.readFileSync(DB_PATH, "utf8");
  return JSON.parse(raw);
}

// Sauvegarder la base produit
function saveDB(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

// ---------------------------------------------------------------------
// ADMIN PRODUCTS
// ---------------------------------------------------------------------

export async function getAdminProducts() {
  const db = loadDB();
  return db.products || [];
}

export async function getAdminProduct(id) {
  const db = loadDB();
  return db.products.find((p) => p.id === id) || null;
}

export async function addAdminProduct(data) {
  const db = loadDB();
  db.products.push(data);
  saveDB(db);
  return { ok: true };
}

export async function updateAdminProduct(id, newData) {
  const db = loadDB();
  db.products = db.products.map((p) =>
    p.id === id ? { ...p, ...newData } : p
  );
  saveDB(db);
  return { ok: true };
}

export async function deleteAdminProduct(id) {
  const db = loadDB();
  db.products = db.products.filter((p) => p.id !== id);
  saveDB(db);
  return { ok: true };
}
// ---------------------------------------------------------------------
// ADMIN ORDERS
// ---------------------------------------------------------------------
const ORDERS_PATH = path.join(process.cwd(), "lib/data/orders.json");

function loadOrders() {
  const raw = fs.readFileSync(ORDERS_PATH, "utf-8");
  return JSON.parse(raw);
}

function saveOrders(data) {
  fs.writeFileSync(ORDERS_PATH, JSON.stringify(data, null, 2));
}

export async function getAdminOrders() {
  const db = loadOrders();
  return db.orders || [];
}

export async function getAdminOrder(id) {
  const db = loadOrders();
  return db.orders.find((o) => o.id === id) || null;
}

export async function addAdminOrder(order) {
  const db = loadOrders();
  db.orders.push(order);
  saveOrders(db);
  return { ok: true };
}

export async function updateAdminOrder(id, newData) {
  const db = loadOrders();
  db.orders = db.orders.map((o) =>
    o.id === id ? { ...o, ...newData } : o
  );
  saveOrders(db);
  return { ok: true };
}

export async function deleteAdminOrder(id) {
  const db = loadOrders();
  db.orders = db.orders.filter((o) => o.id !== id);
  saveOrders(db);
  return { ok: true };
}
