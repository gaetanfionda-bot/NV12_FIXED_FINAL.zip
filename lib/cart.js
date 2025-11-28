export function getCart() {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("cart") || "[]");
}

export function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(product, quantity = 1) {
  const cart = getCart();
  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }

  saveCart(cart);
}

export function removeFromCart(id) {
  const cart = getCart().filter((p) => p.id !== id);
  saveCart(cart);
}

export function clearCart() {
  saveCart([]);
}
