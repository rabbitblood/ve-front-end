import App from "./App.tsx";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "@/ErrorPage.jsx";
import Customize from "@/routes/customize/Customize.tsx";

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
]);

export { router };
