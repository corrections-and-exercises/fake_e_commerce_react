import { useOutletContext } from "react-router-dom";
import {
  increaseAmount,
  decreaseAmount,
  changeAmount,
  getProductInCart,
  addToCart,
  getQuantity,
} from "../utils/cartUtils";
export function ProductCard({ product }) {
  const { cart, setCart } = useOutletContext();

  const stars = new Array(Math.round(product.rating.rate)).fill("★");

  const quantities = new Array(20).fill("").map((el, index) => index);

  const inCart = getProductInCart(cart, product);

  return (
    <div className="flex h-[500px] w-[250px] flex-col items-center justify-between gap-2 p-4">
      <img className="h-[200px]" src={product.image} alt={product.title} />
      <p className="text-yellow-400">{...stars}</p>
      <p className="min-h-20 text-center text-sm">{product.title}</p>
      <p className="text-xs font-bold">{product.price} €</p>
      {!inCart ? (
        <div>
          <button
            className="rounded border-2 border-blue-100 px-4 py-2 hover:bg-slate-200"
            onClick={() => {
              addToCart(inCart, setCart, product);
            }}
          >
            Add to Cart
          </button>
        </div>
      ) : (
        <>
          <select
            className="select w-full max-w-xs"
            onChange={(event) => changeAmount(setCart, product, event)}
          >
            <option disabled selected>
              Menge: {getQuantity(cart, product)}
            </option>
            {quantities.map((el) => (
              <option>Menge: {el}</option>
            ))}
          </select>
        </>
      )}
    </div>
  );
}
