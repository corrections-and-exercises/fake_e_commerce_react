import { increaseAmount, decreaseAmount } from "../utils/cartUtils";
export default function ProductDetail({ product, cart, setCart }) {
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
          <button
            className="btn btn-sm"
            onClick={() => decreaseAmount(setCart, cart, product)}
          >
            -
          </button>
          <span>{product.quantity}</span>
          <button
            className="btn btn-sm"
            onClick={() => increaseAmount(setCart, product)}
          >
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
