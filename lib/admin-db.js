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
