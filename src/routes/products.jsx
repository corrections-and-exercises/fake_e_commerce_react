import { useLoaderData, useOutletContext } from "react-router-dom";
import { getProducts } from "../data/products";
import { ProductCard } from "../ui/productCard";
import Filter from "../ui/filter";

export async function loader() {
  const products = await getProducts();
  return products;
}
export default function Products() {
  const products = useLoaderData();

  const { filter, setFilter } = useOutletContext();

  const filteredProducts = filter
    ? products.filter((product) => product.category === filter)
    : products;

  return (
    <>
      <Filter filter={filter} setFilter={setFilter} />
      <div className="flex flex-wrap justify-center gap-4">
        {filteredProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}
