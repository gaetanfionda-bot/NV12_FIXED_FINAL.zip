export const products = [
  {
    id: "nv-hoodie",
    name: "NV Hoodie",
    slug: "nv-hoodie",
    price: 79,
    stock: 12,
    description: "Hoodie officiel NIGHT VISION — édition V12.",
    image: "https://images.unsplash.com/photo-1609851949984-f5c88c971e0e"
  },

  {
    id: "nv-cap",
    name: "NV Cap",
    slug: "nv-cap",
    price: 39,
    stock: 20,
    description: "Casquette NIGHT VISION — version limited.",
    image: "https://images.unsplash.com/photo-1528701800489-20be3c2a94e8"
  }
];

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}
