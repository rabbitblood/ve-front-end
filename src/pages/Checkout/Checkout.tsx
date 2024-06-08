// import { Contact } from "./Contact/Contact";
// import { Delivery } from "./Delivery/Delivery";
// import { Payment } from "./Payment/Payment";
import styles from "./Checkout.module.css";
import BasicLayout from "@/components/layout/BasicLayout/BasicLayout";
import CheckOutFromContainer from "@/components/Stripe/CheckOutContainer/CheckOutContainer";
import { useEffect, useState } from "react";
import { RequestPaymentForm } from "@/components/Stripe/RequestPaymentForm/RequestPaymentForm";
import { useAppSelector } from "@/lib/redux/reduxDispatcher";

export const Checkout = () => {
  const cart = useAppSelector((state) => state.cart);
  const apiUrl = process.env.VITE_API_URL;
  const [clientSecret, setClientSecret] = useState<string>("");
  const [paymentIntentId, setPaymentIntentId] = useState<string>("");
  const [total, setTotal] = useState<number>(0);
  const [currency, setCurrency] = useState<string>("");

  useEffect(() => {
    fetch(`${apiUrl}/stripe/init-pay`, {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cartItems: cart,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.client_secret);
        setPaymentIntentId(data.payment_intent_id);
        setTotal(data.amount / 100);
        setCurrency(data.currency);
      });
  }, [apiUrl, cart]);

  return (
    <>
      <BasicLayout>
        {(clientSecret && (
          <CheckOutFromContainer
            className={styles.checkout}
            clientSecret={clientSecret}
          >
            <div className={styles.page}>
              <h1>Checkout</h1>
              <p>
                total: {total && total.toFixed(2)}{" "}
                {currency && currency.toUpperCase()}
              </p>
              {clientSecret && (
                <RequestPaymentForm
                  clientSecret={clientSecret}
                  paymentIntentId={paymentIntentId}
                ></RequestPaymentForm>
              )}
            </div>
          </CheckOutFromContainer>
        )) || <div>loading...</div>}
      </BasicLayout>
    </>
  );
};
