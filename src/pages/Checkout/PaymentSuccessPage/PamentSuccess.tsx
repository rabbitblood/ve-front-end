import { useParams } from "react-router-dom";
import { useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";

export default function PaymentSuccess() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { paymentId } = useParams<{ paymentId: string }>();
  const stripe = useStripe();

  useEffect(() => {
    fetch(`${apiUrl}/stripe/get-payment-data-by-id?paymentid=${paymentId}`, {
      mode: "cors",
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, [stripe, paymentId, apiUrl]);

  return (
    <div>
      <h1>Payment Success</h1>
      <p>Payment ID: {paymentId}</p>
    </div>
  );
}
