import { useAsyncValue, useOutletContext } from "react-router-dom";
import { ProductCard } from "./productCard";
export default function ProductContainer() {
  const { filter } = useOutletContext();

  const products = useAsyncValue();
  const filteredProducts = filter
    ? products.filter((product) => product.category === filter)
    : products;
  return (
    <div className="flex w-2/3 flex-wrap">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
