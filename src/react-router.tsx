import App from "./App.tsx";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "@/ErrorPage.jsx";
//import Customize from "@/pages/Customize/Customize.tsx";
import { Register } from "@/pages/Register/Register.tsx";
import { Login } from "@/pages/Login/Login.tsx";
import { Checkout } from "@/pages/Checkout/Checkout.tsx";
import Products from "@/pages/Products/Products.tsx";
import Product from "./pages/Products/Product/Product.tsx";
import ProductIntro from "./pages/Products/ProductIntro/ProductIntro.tsx";
import ProductType from "./pages/Products/ProductType/ProductType.tsx";
import OurStories from "./pages/Other/OurStories.tsx";
import ShippingAndReturn from "./pages/Other/ShippingAndReturn.tsx";
import ContactUs from "./pages/Other/ContactUs.tsx";
import { OrderSummary } from "./pages/OrderSummary/OrderSummary/OrderSummary.tsx";

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
    path: "/checkout",
    children: [
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/checkout/order-summary",
        element: <OrderSummary />,
      },
    ],
  },
  {
    path: "/products",
    children: [
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/ProductIntro/:type",
        element: <ProductIntro />,
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
        path: "/products/view/:productid",
        element: <Product />,
      },
    ],
  },
  {
    path: "/terms",
    children: [
      {
        path: "/terms/shipping-and-return",
        element: <ShippingAndReturn />,
      },
      {
        path: "/terms/our-stories",
        element: <OurStories />,
      },
      {
        path: "/terms/contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);

export { router };
