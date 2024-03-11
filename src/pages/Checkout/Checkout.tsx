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

  const {
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;

  console.log("data", watch(), "error", errors);

  const onSubmit = (data: CheckoutFormData) => {
    console.log(data);
  };
  return (
    <div className={styles.page}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.orderDetails}>
          <Contact />
          <Delivery />
          <Payment />
        </form>
      </FormProvider>
      <OrderSummary className={styles.orderSummary} />
    </div>
  );
};
