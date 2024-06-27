import { useOutletContext } from "react-router-dom";

export function ProductCard({ product }) {
  const { cart, setCart } = useOutletContext();
  const stars = [];
  for (let i = 0; i < Math.round(product.rating.rate); i++) {
    stars.push("★");
  }

  function getProductInCart() {
    return cart.find((p) => p.title === product.title);
  }

  const isAlreadyInCart = getProductInCart();

  function addToCart() {
    if (isAlreadyInCart) return;

    const newProduct = { ...product, quantity: 1 };
    setCart((prev) => [...prev, newProduct]);
  }

  function getQuantity() {
    const productInCart = getProductInCart(product);
    return productInCart.quantity;
  }

  function increaseAmount() {
    setCart((prev) =>
      prev.map((p) =>
        p.title === product.title ? { ...p, quantity: p.quantity++ } : p,
      ),
    );
  }

  function decreaseAmount() {
    const productInCart = getProductInCart();
    if (productInCart.quantity === 1) {
      setCart((prev) => prev.filter((p) => p.title !== product.title));
    } else {
      setCart((prev) =>
        prev.map((p) =>
          p.title === product.title ? { ...p, quantity: p.quantity-- } : p,
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
      {!isAlreadyInCart ? (
        <button
          className="rounded bg-blue-300 p-4"
          onClick={() => {
            addToCart(product);
          }}
        >
          Add to Cart
        </button>
      ) : (
        <>
          <p>Amount: {getQuantity(product)}</p>
          <div className="flex gap-2">
            <button onClick={decreaseAmount}>-</button>
            <button onClick={increaseAmount}>+</button>
          </div>
        </>
      )}
    </div>
  );
}
