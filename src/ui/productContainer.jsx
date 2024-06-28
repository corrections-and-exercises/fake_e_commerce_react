import { useAsyncValue, useOutletContext } from "react-router-dom";
import { ProductCard } from "./productCard";
import { filterProducts } from "../utils/productUtils";
export default function ProductContainer() {
  const { filter } = useOutletContext();

  const products = useAsyncValue();
  const filteredProducts = filterProducts(products, filter);

  return (
    <div className="flex w-[850px] flex-wrap gap-4">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
