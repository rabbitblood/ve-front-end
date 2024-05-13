import styles from "./OrderSummary.module.css";
import { CartItem } from "./CartItem/CartItem";
import clsx from "clsx";
// import { Input } from "@/components/atoms/Input/Input";
// import { FormProvider, useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
import { useAppSelector } from "@/lib/redux/reduxDispatcher";
import {
  calculateCartTotal,
  calculateCartTotalWithFeeAndTax,
  getAllSimmilarProducts,
  getProductById,
} from "@/lib/VeProduct/VeproductUtil";
import { Link } from "react-router-dom";
import BasicLayout from "@/components/layout/BasicLayout/BasicLayout";
import {
  VeDefaultCurrency,
  VeShippingFee,
  VeTaxRate,
} from "@/lib/VeProduct/VeConstants";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

// const CouponSchema = z.object({
//   code: z.string().min(1, "Code is required"),
// });

// type CouponData = z.infer<typeof CouponSchema>;

export const OrderSummary = (props: Props) => {
  // const methods = useForm<CouponData>({
  //   resolver: zodResolver(CouponSchema),
  // });

  const cart = useAppSelector((state) => state.cart);
  const simmilarProducts = getAllSimmilarProducts(
    cart.items.map((item) => getProductById(item.productId) as VeProduct)
  );

  const subtotal = calculateCartTotal(cart);
  const total = calculateCartTotalWithFeeAndTax(cart);

  return (
    <BasicLayout>
      <div className={clsx(styles.orderSummary, props.className)}>
        <h3>Order Summary</h3>
        <div className={styles.wrapper}>
          <div className={styles.cartItems}>
            {cart.items.map((item, key) => (
              <CartItem key={key} product={item} />
            ))}
          </div>
          <div className={styles.price}>
            <div>
              <span>Subtotal</span> <p>$ {subtotal.toFixed(2)}</p>
            </div>
            <div>
              <span>Shipping</span> <p>$ {VeShippingFee.toFixed(2)}</p>
            </div>
            <div>
              <span>Estimated Tax</span>{" "}
              <p>$ {(subtotal * VeTaxRate).toFixed(2)}</p>
            </div>
            <div className={styles.total}>
              <span>Total</span>{" "}
              <div>
                <span className={styles.currency}>
                  {VeDefaultCurrency.toUpperCase()}
                </span>
                <p>$ {total.toFixed(2)}</p>
              </div>
            </div>
            <Link to={`/checkout`}>
              <button className={styles.payButton}>Pay Now</button>
            </Link>
          </div>
        </div>
        {simmilarProducts.length > 0 && (
          <div className={styles.simmilarProducts}>
            <h3>People also bought:</h3>
            <div className={styles.simmilarProductsWrapper}>
              {simmilarProducts.map((product, key) => (
                <Link to={`/products/view/${product.productId}`} key={key}>
                  <div key={key} className={styles.simmilarProduct}>
                    <img
                      className={styles.simmilarProductImage}
                      src={product.images[0]}
                      alt={product.name}
                    />
                    <h5 className={styles.simmilarProductTitle}>
                      {product.name}
                    </h5>
                    <p className={styles.simmilarProductPrice}>
                      {product.price}$
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </BasicLayout>
  );
};
