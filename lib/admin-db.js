"use server";

import fs from "fs";
import path from "path";

// ---------------------------------------------------------------------
// PATHS DES BASES JSON
// ---------------------------------------------------------------------

const PRODUCTS_PATH = path.join(process.cwd(), "lib/data/products.json");
const ORDERS_PATH = path.join(process.cwd(), "lib/data/orders.json");

// ---------------------------------------------------------------------
// FONCTIONS UTILITAIRES
// ---------------------------------------------------------------------

function loadJSON(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw);
}

function saveJSON(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// =====================================================================
// PRODUITS (ADMIN)
// =====================================================================

export async function getAdminProducts() {
  const db = loadJSON(PRODUCTS_PATH);
  return db.products || [];
}

export async function getAdminProduct(id) {
  const db = loadJSON(PRODUCTS_PATH);
  return db.products.find((p) => p.id === id) || null;
}

export async function addAdminProduct(data) {
  const db = loadJSON(PRODUCTS_PATH);
  db.products.push(data);
  saveJSON(PRODUCTS_PATH, db);
  return { ok: true };
}

export async function updateAdminProduct(id, newData) {
  const db = loadJSON(PRODUCTS_PATH);
  db.products = db.products.map((p) =>
    p.id === id ? { ...p, ...newData } : p
  );
  saveJSON(PRODUCTS_PATH, db);
  return { ok: true };
}

export async function deleteAdminProduct(id) {
  const db = loadJSON(PRODUCTS_PATH);
  db.products = db.products.filter((p) => p.id !== id);
  saveJSON(PRODUCTS_PATH, db);
  return { ok: true };
}

// =====================================================================
// COMMANDES (ADMIN)
// =====================================================================

export async function getAdminOrders() {
  const db = loadJSON(ORDERS_PATH);
  return db.orders || [];
}

export async function getAdminOrder(id) {
  const db = loadJSON(ORDERS_PATH);
  return db.orders.find((o) => o.id === id) || null;
}

export async function addAdminOrder(order) {
  const db = loadJSON(ORDERS_PATH);
  db.orders.push(order);
  saveJSON(ORDERS_PATH, db);
  return { ok: true };
}

export async function updateAdminOrder(id, newData) {
  const db = loadJSON(ORDERS_PATH);
  db.orders = db.orders.map((o) =>
    o.id === id ? { ...o, ...newData } : o
  );
  saveJSON(ORDERS_PATH, db);
  return { ok: true };
}

export async function deleteAdminOrder(id) {
  const db = loadJSON(ORDERS_PATH);
  db.orders = db.orders.filter((o) => o.id !== id);
  saveJSON(ORDERS_PATH, db);
  return { ok: true };
}
