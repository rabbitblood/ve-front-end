import { Contact } from "./Contact/Contact";
import { Delivery } from "./Delivery/Delivery";
import { Payment } from "./Payment/Payment";
import { OrderSummary } from "./OrderSummary/OrderSummary";
import styles from "./Checkout.module.css";
import { FormProvider, useForm } from "react-hook-form";
import { CheckoutFormData, CheckoutSchema } from "./Checkout.data";
import { zodResolver } from "@hookform/resolvers/zod";

export const Checkout = () => {
  const methods = useForm<CheckoutFormData>({
    resolver: zodResolver(CheckoutSchema),
    defaultValues: {
      needsShipping: true,
      textSubscribe: true,
      emailSubscribe: true,
    },
  });

  const { handleSubmit, watch } = methods;

  const data = watch();
  console.log("checkout data", data);

  const onSubmit = (data: CheckoutFormData) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <div className={styles.page}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.orderDetails}>
          <Contact />
          <Delivery />
          <Payment />
        </form>
        <OrderSummary className={styles.orderSummary} />
      </div>
    </FormProvider>
  );
};
