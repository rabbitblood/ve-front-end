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
import { getStoreData } from "@/lib/builderio/builderDataUtil";
import { HTMLAttributes, useEffect, useState } from "react";
interface Props extends HTMLAttributes<HTMLDivElement> {}

// const CouponSchema = z.object({
//   code: z.string().min(1, "Code is required"),
// });

// type CouponData = z.infer<typeof CouponSchema>;

export const OrderSummary = (props: Props) => {
  // const methods = useForm<CouponData>({
  //   resolver: zodResolver(CouponSchema),
  // });

  const [total, setTotal] = useState<number>(0);
  const [simmilarProducts, setSimmilarProducts] = useState<VeProduct[]>([]);
  const [subtotal, setSubtotal] = useState<number>(0);
  const cart = useAppSelector((state) => state.cart);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [storeData, setStoreData] = useState<any>(null);

  useEffect(() => {
    getStoreData().then((data) => {
      setStoreData(data);
    });

    async function getSimProducts() {
      const allCartProducts = [];

      for (const item of cart.items) {
        const product = await getProductById(item.productId);
        if (product) {
          allCartProducts.push(product);
        }
      }
      getAllSimmilarProducts(allCartProducts).then((products) => {
        setSimmilarProducts(products);
      });
    }
    getSimProducts();
  }, []);

  useEffect(() => {
    calculateCartTotal(cart).then((total) => {
      setSubtotal(total);
    });

    calculateCartTotalWithFeeAndTax(cart).then((total) => {
      setTotal(total as number);
    });
  }, [cart]);

  return (
    <BasicLayout>
      {subtotal > 0 ? (
        storeData && (
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
                  <span>Shipping</span>{" "}
                  <p>$ {storeData.shippingFee.toFixed(2)}</p>
                </div>
                <div>
                  <span>Estimated Tax</span>{" "}
                  <p>$ {(subtotal * storeData.taxRate).toFixed(2)}</p>
                </div>
                <div className={styles.total}>
                  <span>Total</span>{" "}
                  <div>
                    <span className={styles.currency}>
                      {storeData.currency.toUpperCase()}
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
        )
      ) : (
        <div className={clsx(styles.orderSummary, props.className)}>
          <p>No Item In Cart</p>
        </div>
      )}
    </BasicLayout>
  );
};
