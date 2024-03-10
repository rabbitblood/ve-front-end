import App from "./App.tsx";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "@/ErrorPage.jsx";
import Customize from "@/pages/customize/Customize.tsx";
import { Register } from "./pages/Register/Register.tsx";
import { Login } from "./pages/Login/Login.tsx";

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
]);

export { router };
