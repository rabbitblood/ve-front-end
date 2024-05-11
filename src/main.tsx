import React from "react";
import ReactDOM from "react-dom/client";
import "./css/home.css";
import { router } from "./react-router";

import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./lib/redux/store/store";

import PopUp from "./components/atoms/PopUp/PopUp";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
      <PopUp />
    </React.StrictMode>
  </Provider>
);
