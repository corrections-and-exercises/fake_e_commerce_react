export function filterProducts(products, filter) {
  return filter
    ? products.filter((product) => product.category === filter)
    : products;
}
