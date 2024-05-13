import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import stripePromise from "@/lib/stripe/util";

interface CheckoutFormProps extends React.HTMLAttributes<HTMLFormElement> {
  clientSecret: string;
}

export default function CheckOutFromContainer(props: CheckoutFormProps) {
  //eslint-disable-next-line
  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret: props.clientSecret,
      }}
    >
      {props.children}
    </Elements>
  );
}
