import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Cart from "./Component/Cart/Cart.jsx";
import MainAuth from "./Component/Authentication/MainAuth.jsx";
import Setting from "./Component/Setting/Setting.jsx";
import AddProduct from "./Component/AddProduct/AddProduct.jsx";
import Home from "./Home.jsx";
import DashboardMain from "./Component/Dashboard/DashboardMain.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/auth",
        element: <MainAuth />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
      {
        path: "/dashboard",
        element: <DashboardMain />,
      },
      {
        path: "/Product",
        element: <AddProduct />,
      },
    ],
  },
]);



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
