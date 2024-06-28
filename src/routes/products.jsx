import {
  useLoaderData,
  useOutletContext,
  Await,
  defer,
} from "react-router-dom";
import { getProducts } from "../data/products";
import Filter from "../ui/filter";
import { Suspense } from "react";
import ProductContainer from "../ui/productContainer";
import ProductSkeleton from "../ui/productSkeleton";

export async function loader() {
  const products = getProducts();
  return defer({ products });
}
export default function Products() {
  const { filter, setFilter } = useOutletContext();
  const { products } = useLoaderData();

  return (
    <>
      <Filter filter={filter} setFilter={setFilter} />
      <div className="flex flex-wrap justify-center gap-4">
        <Suspense fallback={<ProductSkeleton />}>
          <Await resolve={products}>
            <ProductContainer />
          </Await>
        </Suspense>
      </div>
    </>
  );
}
