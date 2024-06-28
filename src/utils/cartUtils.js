export function getTotal(cart) {
  if (cart.length < 1) return;
  const total = cart.reduce((acc, curr) => {
    acc += curr.price * curr.quantity;
    return acc;
  }, 0);
  return total.toFixed(2);
}

export function getProductInCart(cart, product) {
  return cart.find((p) => p.title === product.title);
}

export function addToCart(inCart, updateCart, product) {
  if (inCart) return;
  const newProduct = { ...product, quantity: 1 };
  updateCart((prev) => [...prev, newProduct]);
}

export function getQuantity(cart, product) {
  const productInCart = getProductInCart(cart, product);
  return productInCart.quantity;
}

export function increaseAmount(updateCart, product) {
  updateCart((prev) =>
    prev.map((p) =>
      p.title === product.title ? { ...p, quantity: p.quantity + 1 } : p,
    ),
  );
}

export function decreaseAmount(updateCart, cart, product) {
  const productInCart = getProductInCart(cart, product);
  if (productInCart.quantity === 1) {
    updateCart((prev) => prev.filter((p) => p.title !== product.title));
  } else {
    updateCart((prev) =>
      prev.map((p) =>
        p.title === product.title ? { ...p, quantity: p.quantity - 1 } : p,
      ),
    );
  }
}

export function changeAmount(updateCart, product, event) {
  const newAmount = parseInt(event.target.value.slice(6));

  if (newAmount === 0) {
    updateCart((prev) => prev.filter((p) => p.title !== product.title));
  } else {
    updateCart((prev) =>
      prev.map((p) =>
        p.title === product.title ? { ...p, quantity: newAmount } : p,
      ),
    );
  }
}
