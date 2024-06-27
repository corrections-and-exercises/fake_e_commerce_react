import { useOutletContext } from "react-router-dom";
import ProductDetail from "../ui/productDetail";
import { useNavigation } from "react-router-dom";

export default function Cart() {
  const { cart, setCart } = useOutletContext();

  const navigation = useNavigation();

  function getTotal() {
    if (cart.length < 1) return;
    const total = cart.reduce((acc, curr) => {
      acc += curr.price * curr.quantity;
      return acc;
    }, 0);
    return total.toFixed(2);
  }
  return (
    <>
      <div className={navigation.state === "loading" ? "opacity-45" : ""}>
        {cart.length < 1 ? (
          <div className="mx-auto mt-2 w-4/5 rounded bg-purple-300 p-2">
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="table min-h-2.5">
                {/* head */}
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
                        setCart={setCart}
                      />
                    );
                  })}
                </tbody>
                {/* foot */}
                <tfoot>
                  <tr>
                    <th></th>
                    <th> </th>
                    <th>Total</th>
                    <th>{getTotal()}</th>
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
