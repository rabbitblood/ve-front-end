import App from "./App.tsx";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "@/ErrorPage.jsx";
//import Customize from "@/pages/Customize/Customize.tsx";
import { Register } from "@/pages/Register/Register.tsx";
import { Login } from "@/pages/Login/Login.tsx";
import { Checkout } from "@/pages/Checkout/Checkout.tsx";
//import Products from "@/pages/Products/Products.tsx";
import Product from "./pages/Products/Product/Product.tsx";
import ProductIntro from "./pages/Products/ProductIntro/Page.tsx";
import ProductType from "./pages/Products/ProductType/ProductType.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/account/register",
    element: <Register />,
  },
  {
    path: "/account/login",
    element: <Login />,
  },
  {
    path: "checkout",
    element: <Checkout />,
  },
  {
    path: "/products/:type",
    element: <ProductType />,
  },
  {
    path: "/products/:type/:series",
    element: <ProductType />,
  },
  {
    path: "/products/ProductIntro/:type",
    element: <ProductIntro />,
  },
  {
    path: "/products/view/:productid",
    element: <Product />,
  },
]);

export { router };
