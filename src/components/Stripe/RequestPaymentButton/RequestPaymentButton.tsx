import React, { useState, useEffect } from "react";
import {
  PaymentRequestButtonElement,
  useStripe,
} from "@stripe/react-stripe-js";

export const CheckoutForm = () => {
  const stripe = useStripe();
  //eslint-disable-next-line
  const [paymentRequest, setPaymentRequest] = useState<any>();

  useEffect(() => {
    if (stripe) {
      const pr = stripe.paymentRequest({
        country: "US",
        currency: "usd",
        total: {
          label: "Demo total",
          amount: 1099,
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      console.log(pr);

      // Check the availability of the Payment Request API.
      pr.canMakePayment().then((result) => {
        console.log(result);
        if (result) {
          setPaymentRequest(pr);
        }
      });
    }
  }, [stripe]);

  return (
    <>
      {paymentRequest && (
        <PaymentRequestButtonElement options={{ paymentRequest }} />
      )}
    </>
  );
};
