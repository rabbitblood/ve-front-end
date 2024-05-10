import { RadioGroup } from "@/components/atoms/RadioGroup/RadioGroup";
import { Controller, useFormContext } from "react-hook-form";
import CreditCard from "./assets/visa.webp";
import PayPal from "./assets/paypal.png";
import { Input } from "@/components/atoms/Input/Input";
import { Row } from "@/components/atoms/Row/Row";
import styles from "./Payment.module.css";
import { AddressFields } from "../AddressFields/AddressFields";

const paymentOptions = [
  {
    label: "Credit Card",
    value: "creditCard",
    icon: CreditCard,
    body: (
      <div className={styles.creditCard}>
        <Input label="Card Number" name="payment.creditCard.number" />
        <Row>
          <Input
            label="Expiration Date (dd/mm)"
            name="payment.creditCard.expiry"
          />
          <Input label="CVV" name="payment.creditCard.cvv" />
        </Row>
        <Input label="Name on Card" name="payment.creditCard.name" />
      </div>
    ),
  },
  {
    label: "PayPal",
    value: "paypal",
    icon: PayPal,
    body: (
      <div className={styles.paypal}>
        <p>
          After clicking "Pay with PayPal", you will be redirected to PayPal to
          complete your purchase securely.
        </p>
      </div>
    ),
  },
];

export const Payment = () => {
  const { control, watch } = useFormContext();
  const paymentMethod = watch("payment.method");
  const shouldShowBillingAddress = !watch("needsShipping");

  return (
    <section>
      <h2>Payment</h2>
      <h4>All transactions are secure and encrypted.</h4>
      <Controller
        name="payment.method"
        control={control}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        render={({ field: { ref, ...props } }) => (
          <RadioGroup options={paymentOptions} {...props} />
        )}
      />
      {shouldShowBillingAddress && (
        <>
          <h3 className={styles.billingTitle}>Billing Address</h3>
          <AddressFields namePrefix="address" />
        </>
      )}
      {paymentMethod && paymentMethod === "creditCard" && (
        <button className={styles.payButton}>Pay Now</button>
      )}
      {paymentMethod && paymentMethod === "paypal" && (
        <button className={styles.paypalButton}>Pay With Paypal</button>
      )}
    </section>
  );
};
