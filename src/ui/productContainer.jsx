import { useAsyncValue, useOutletContext } from "react-router-dom";
import { ProductCard } from "./productCard";
import { filterProducts } from "../utils/productUtils";
export default function ProductContainer() {
  const { filter } = useOutletContext();

  const products = useAsyncValue();
  const filteredProducts = filterProducts(products, filter);

  return (
    <>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}
