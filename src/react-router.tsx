import App from "./App.tsx";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "@/ErrorPage.jsx";
import Customize from "@/routes/customize/Customize.tsx";
import { Register } from "./pages/Register/Register.tsx";
import { Login } from "./pages/Login/Login.tsx";
import { Checkout } from "./pages/Checkout/Checkout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/customize",
    element: <Customize />,
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
]);

export { router };
