export function getTotal(cart) {
  if (cart.length < 1) return;
  const total = cart.reduce((acc, curr) => {
    acc += curr.price * curr.quantity;
    return acc;
  }, 0);
  return total.toFixed(2);
}
