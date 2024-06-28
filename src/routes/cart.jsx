import { useOutletContext } from "react-router-dom";
import ProductDetail from "../ui/productDetail";
import { getTotal } from "../utils/cartUtils";

export default function Cart() {
  const { cart, setCart } = useOutletContext();

  return (
    <>
      <div>
        {cart.length < 1 ? (
          <div className="mx-auto mt-2 w-4/5 rounded bg-purple-300 p-2">
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="table min-h-2.5">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((el) => {
                    return (
                      <ProductDetail
                        key={el.id}
                        product={el}
                        cart={cart}
                        setCart={setCart}
                      />
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <th></th>
                    <th> </th>
                    <th>Total</th>
                    <th>{getTotal(cart)}</th>
                  </tr>
                </tfoot>
              </table>
              <button className="btn ml-4" onClick={() => setCart([])}>
                Reset Cart
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
