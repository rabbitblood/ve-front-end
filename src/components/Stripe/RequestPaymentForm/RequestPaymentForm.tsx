import { useEffect } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
  AddressElement,
  LinkAuthenticationElement,
} from "@stripe/react-stripe-js";
import { FormButton } from "@/components/atoms/FormButton/FormButton";
interface RequestPaymentButtonProps {
  clientSecret: string;
}

export const RequestPaymentForm = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  props: RequestPaymentButtonProps
) => {
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {}, [elements]);

  const handlePaymentRequest = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    console.log(elements);
    e.preventDefault();
    if (stripe && elements) {
      console.log("confirming payment");
      const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "http://localhost:3000",
        },
      });
      console.log(result);
    }
  };

  return (
    <form>
      <LinkAuthenticationElement />
      <AddressElement
        options={{
          mode: "shipping",
        }}
      />
      <PaymentElement options={{ business: { name: "Ve" } }} />
      <FormButton onClick={(e) => handlePaymentRequest(e)}>submit</FormButton>
    </form>
  );
};
