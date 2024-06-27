import { Outlet } from "react-router-dom";
import Navbar from "../ui/navbar";
import Filter from "../ui/filter";
import { useState } from "react";

export default function Root() {
  const [filter, setFilter] = useState("");
  const [cart, setCart] = useState([]);
  return (
    <div>
      <Navbar setFilter={setFilter} cart={cart} />
      <Outlet context={{ filter, setFilter, setCart, cart }} />
    </div>
  );
}
