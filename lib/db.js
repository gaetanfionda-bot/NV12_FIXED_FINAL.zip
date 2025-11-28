
// lib/db.js FIXED

import { getProducts as loadProducts, getProduct as loadProduct } from './json-db.js';

// Retourne tous les produits
export async function getProducts() {
  const products = loadProducts();
  return Array.isArray(products) ? products : [];
}

// Retourne un produit par ID
export async function getProductById(id) {
  return loadProduct(id);
}

// Retourne un produit par slug
export async function getProductBySlug(slug) {
  const products = loadProducts();
  if (!Array.isArray(products)) return null;
  return products.find(p => p.slug === slug) || null;
}
