import fs from "fs";
import path from "path";

function load(file) {
  const filePath = path.join(process.cwd(), "lib/data", file);
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
}

function save(file, data) {
  const filePath = path.join(process.cwd(), "lib/data", file);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// -------- PRODUCTS --------

export function getProducts() {
  return load("products.json").products;
}

export function getProduct(id) {
  return getProducts().find((p) => p.id === id) || null;
}

export function addProduct(product) {
  const db = load("products.json");

  if (db.products.length >= 100) return { ok: false, error: "MAX_REACHED" };

  if (db.products.some((p) => p.id === product.id))
    return { ok: false, error: "ALREADY_EXISTS" };

  db.products.push(product);
  save("products.json", db);
  return { ok: true };
}

export function updateProduct(id, data) {
  const db = load("products.json");

  db.products = db.products.map((p) =>
    p.id === id ? { ...p, ...data } : p
  );

  save("products.json", db);
  return { ok: true };
}

export function deleteProduct(id) {
  const db = load("products.json");
  db.products = db.products.filter((p) => p.id !== id);
  save("products.json", db);
  return { ok: true };
}

// -------- ORDERS --------

export function getOrders() {
  return load("orders.json").orders;
}

export function addOrder(order) {
  const db = load("orders.json");
  db.orders.push(order);
  save("orders.json", db);
  return { ok: true };
}

export function updateOrder(id, data) {
  const db = load("orders.json");
  db.orders = db.orders.map((o) =>
    o.id === id ? { ...o, ...data } : o
  );
  save("orders.json", db);
  return { ok: true };
}
