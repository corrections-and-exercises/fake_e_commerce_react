import { Link } from "react-router-dom";

export default function Navbar({ setFilter, cart }) {
  return (
    <div className="flex h-20 items-center justify-around bg-pink-900 p-2 text-white">
      <h1 className="hover:cursor-pointer" onClick={() => setFilter("")}>
        E-Commerce
      </h1>
      <div className="flex gap-10">
        <Link to="/">Products</Link>
        <Link to="/cart">
          Cart <span>Items: {cart.length}</span>
        </Link>
      </div>
    </div>
  );
}
