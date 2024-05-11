// import { Contact } from "./Contact/Contact";
// import { Delivery } from "./Delivery/Delivery";
// import { Payment } from "./Payment/Payment";
import styles from "./Checkout.module.css";
import BasicLayout from "@/components/layout/BasicLayout/BasicLayout";
import CheckOutFromContainer from "@/components/Stripe/CheckOutContainer/CheckOutContainer";
import { useEffect, useState } from "react";
import { RequestPaymentForm } from "@/components/Stripe/RequestPaymentForm/RequestPaymentForm";
import { useAppSelector } from "@/lib/redux/reduxDispatcher";
import { calculateCartTotalWithFeeAndTax } from "@/lib/VeProduct/VeproductUtil";
import { VeDefaultCurrency } from "@/lib/VeProduct/VeConstants";

export const Checkout = () => {
  const cart = useAppSelector((state) => state.cart);
  const apiUrl = import.meta.env.VITE_API_URL;
  const [clientSecret, setClientSecret] = useState<string>("");

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
      });
  }, [apiUrl, cart]);

  return (
    <>
      {clientSecret && (
        <CheckOutFromContainer
          className={styles.checkout}
          clientSecret={clientSecret}
        >
          <BasicLayout>
            <div className={styles.page}>
              <h1>Checkout</h1>
              <p>
                total: {calculateCartTotalWithFeeAndTax(cart)}{" "}
                {VeDefaultCurrency.toUpperCase()}
              </p>
              {clientSecret && (
                <RequestPaymentForm
                  clientSecret={clientSecret}
                ></RequestPaymentForm>
              )}
            </div>
          </BasicLayout>
        </CheckOutFromContainer>
      )}
    </>
  );
};
