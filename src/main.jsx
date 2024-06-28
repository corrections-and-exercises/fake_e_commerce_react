import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./routes/root";
import Products, { loader as productLoader } from "./routes/products";
import Cart from "./routes/cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorBoundary from "./routes/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        errorElement: <ErrorBoundary />,
        children: [
          { index: true, element: <Products />, loader: productLoader },
          { path: "/cart", element: <Cart /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />,
  // </React.StrictMode>,
);
