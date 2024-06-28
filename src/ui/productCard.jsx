import { useOutletContext } from "react-router-dom";
import { getProductInCart, addToCart, getQuantity } from "../utils/cartUtils";
export function ProductCard({ product }) {
  const { cart, setCart } = useOutletContext();

  const stars = new Array(Math.round(product.rating.rate)).fill("★");

  const inCart = getProductInCart(cart, product);

  function increaseAmount() {
    setCart((prev) =>
      prev.map((p) =>
        p.title === product.title ? { ...p, quantity: p.quantity + 1 } : p,
      ),
    );
  }

  function decreaseAmount() {
    const productInCart = getProductInCart(cart, product);
    if (productInCart.quantity === 1) {
      setCart((prev) => prev.filter((p) => p.title !== product.title));
    } else {
      setCart((prev) =>
        prev.map((p) =>
          p.title === product.title ? { ...p, quantity: p.quantity - 1 } : p,
        ),
      );
    }
  }

  return (
    <div className="flex w-1/3 flex-col items-center gap-2 p-4">
      <img className="h-40" src={product.image} alt={product.title} />
      <p className="text-sm">{product.title}</p>
      <p>{product.price} €</p>
      <p className="text-yellow-400">{...stars}</p>
      {!inCart ? (
        <button
          className="rounded bg-blue-300 p-4"
          onClick={() => {
            addToCart(inCart, setCart, product);
          }}
        >
          Add to Cart
        </button>
      ) : (
        <>
          <p>Amount: {getQuantity(cart, product)}</p>
          <div className="flex gap-2">
            <button onClick={decreaseAmount}>-</button>
            <button onClick={increaseAmount}>+</button>
          </div>
        </>
      )}
    </div>
  );
}
