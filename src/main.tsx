import React from "react";
import ReactDOM from "react-dom/client";
import "./css/home.css";
import { router } from "./react-router";

import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./lib/redux/store/store";

import PopUp from "./components/atoms/PopUp/PopUp";

//stripe
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51PDwmZArIwdh3r3DfE4t6y3pCEgxGtjglSl7GBQVPcmXz5QKZbbyDKGT8trgeFBkbZfvjOBjB0MdgoXoq04GJ39d00MdtwUpCE"
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Elements stripe={stripePromise}>
    <Provider store={store}>
      <React.StrictMode>
        <RouterProvider router={router} />
        <PopUp />
      </React.StrictMode>
    </Provider>
  </Elements>
);
