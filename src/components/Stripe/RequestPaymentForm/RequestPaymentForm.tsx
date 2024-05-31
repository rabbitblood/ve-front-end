import {
  useStripe,
  useElements,
  PaymentElement,
  AddressElement,
  LinkAuthenticationElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { FormButton } from "@/components/atoms/FormButton/FormButton";
import { StripeLinkAuthenticationElementChangeEvent } from "@stripe/stripe-js";
import { postServerData } from "@/lib/VeProduct/retrieveServerData";
import { useState } from "react";
import style from "./RequestPaymentForm.module.css";

interface RequestPaymentButtonProps {
  clientSecret: string;
  paymentIntentId: string;
}

export const RequestPaymentForm = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  props: RequestPaymentButtonProps
) => {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState<string>("");
  async function handleEmailChange(
    e: StripeLinkAuthenticationElementChangeEvent
  ) {
    setEmail(e.value.email);
  }

  const handlePaymentRequest = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    let paymentIntentId = "";
    e.preventDefault();
    if (stripe && elements) {
      await stripe
        .confirmPayment({
          elements,
          confirmParams: {
            return_url: `https://localhost:5173/checkout/success?client_secret=${props.clientSecret}&paymentid=${props.paymentIntentId}`,
          },
          redirect: "if_required",
        })
        .then((res) => {
          paymentIntentId = res.paymentIntent?.id ?? "";
          //update payment intent with email
          postServerData("/stripe/update-pay", {
            paymentIntentId: res.paymentIntent?.id,
            receipt_email: email,
          }).then((data) => {
            if (data.error) {
              alert(data.error);
              window.location.href = "/checkout";
              return;
            } else {
              window.location.href = `/checkout/success?paymentid=${paymentIntentId}`;
            }
          });
        });
    }
  };

  return (
    <ElementsConsumer>
      {() => (
        <form className={style["payment-form"]}>
          <LinkAuthenticationElement
            onChange={(e) => handleEmailChange(e)}
            className={style["payment-element"]}
          />
          <AddressElement
            className={style["payment-element"]}
            options={{
              mode: "shipping",
            }}
          />
          <PaymentElement
            options={{ business: { name: "Ve" } }}
            className={style["payment-element"]}
          />
          <FormButton
            additionalClasses={style["payment-submit-button"]}
            onClick={(e) => handlePaymentRequest(e)}
          >
            submit
          </FormButton>
        </form>
      )}
    </ElementsConsumer>
  );
};
