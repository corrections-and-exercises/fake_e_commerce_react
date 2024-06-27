export default function ProductDetail({ product, setCart }) {
  function increaseAmount() {
    setCart((prev) =>
      prev.map((p) =>
        p.title === product.title ? { ...p, quantity: p.quantity++ } : p,
      ),
    );
  }

  function decreaseAmount() {
    if (product.quantity === 1) {
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
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={product.image} alt={product.title} />
            </div>
          </div>
          <div>
            <div className="font-bold">{product.title}</div>
            <div className="text-sm opacity-50">{product.category}</div>
          </div>
        </div>
      </td>
      <td>{product.description}</td>
      <td>
        <div className="flex items-center gap-2">
          <button className="btn btn-sm" onClick={decreaseAmount}>
            -
          </button>
          <span>{product.quantity}</span>
          <button className="btn btn-sm" onClick={increaseAmount}>
            +
          </button>
        </div>
      </td>
      <th>
        <button className="btn btn-ghost btn-xs">
          {(product.price * product.quantity).toFixed(2)}
        </button>
      </th>
    </tr>
  );
}
