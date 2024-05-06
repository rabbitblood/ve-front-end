import styles from "./OrderSummary.module.css";
import { CartItem } from "./CartItem/CartItem";
import clsx from "clsx";
import { Input } from "@/components/atoms/Input/Input";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppSelector } from "@/lib/redux/reduxDispatcher";

type Props = {
  className: string;
};

const CouponSchema = z.object({
  code: z.string().min(1, "Code is required"),
});

type CouponData = z.infer<typeof CouponSchema>;

export const OrderSummary = ({ className }: Props) => {
  const methods = useForm<CouponData>({
    resolver: zodResolver(CouponSchema),
  });
  const { handleSubmit } = methods;
  const onSubmit = (data: CouponData) => {
    console.log(data);
  };

  const cartItems = useAppSelector((state) => state.cart.items);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.amount,
    0
  );

  const shipping = 10;
  const taxRate = 0.1;
  const currency = "CAD";

  return (
    <div className={clsx(styles.orderSummary, className)}>
      <h3>Order Summary</h3>
      <div className={styles.wrapper}>
        <div className={styles.cartItems}>
          {cartItems.map((item) => (
            <CartItem key={item.productId} product={item} />
          ))}
        </div>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <Input label="Discount or Gift Card" name="code" />
            <button>Apply</button>
          </form>
        </FormProvider>
        <div className={styles.price}>
          <div>
            <span>Subtotal</span> <p>$ {subtotal}</p>
          </div>
          <div>
            <span>Shipping</span> <p>$ {shipping}</p>
          </div>
          <div>
            <span>Estimated Tax</span> <p>$ {subtotal * taxRate}</p>
          </div>
          <div className={styles.total}>
            <span>Total</span>{" "}
            <div>
              <span className={styles.currency}>{currency}</span>
              <p>$ {subtotal + shipping + subtotal * taxRate}</p>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.payButton}>Pay Now</button>
    </div>
  );
};
