import { getProductById } from "@/lib/VeProduct/VeproductUtil";
import styles from "./CartItem.module.css";
import { modifyItemQuantity } from "@/lib/redux/store/cartSlice";
import { useAppDispatch } from "@/lib/redux/reduxDispatcher";
import { HTMLAttributes, useEffect, useRef, useState } from "react";
import { useAppSelector } from "@/lib/redux/reduxDispatcher";

interface Prop extends HTMLAttributes<HTMLDivElement> {
  product: VeCartItem;
}

export const CartItem = (props: Prop) => {
  const itemAmountInput = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const [comboProduct, setComboProduct] = useState<VeProduct | null>(null);
  const cart = useAppSelector((state) => state.cart);

  useEffect(() => {
    if (itemAmountInput.current) {
      itemAmountInput.current.value = cart.items
        .find((item) => JSON.stringify(item) === JSON.stringify(props.product))
        ?.amount.toString() as string;
    }
  }, [cart.items, props.product]);

  useEffect(() => {
    if (props.product.comboId) {
      getProductById(props.product.comboId).then((combo) => {
        setComboProduct(combo as VeProduct);
      });
    }
  }, [props.product.comboId]);

  function modifyItemQuantityHandler(amount: number) {
    dispatch(
      modifyItemQuantity({
        cartItem: props.product,
        newAmount: amount,
      })
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardLeft}>
        <div className={styles.imageWrapper}>
          <input
            ref={itemAmountInput}
            type="number"
            step={1}
            className={styles.quantity}
            defaultValue={props.product.amount.toString()}
            onKeyDown={(e) => {
              if (e.key === "e" || e.key === "+" || e.key === "-") {
                e.preventDefault();
              }
              if (e.key === "Enter") {
                e.stopPropagation();
                e.preventDefault();
                e.currentTarget.blur();
              }
            }}
            onBlurCapture={(e) => {
              e.stopPropagation();
              e.preventDefault();
              modifyItemQuantityHandler(
                Number(itemAmountInput.current?.value) ?? 0
              );
            }}
          />
          <img
            src={props.product.imageUrl}
            alt={props.product.productName}
            className={styles.productImage}
          />
        </div>
        <div>
          <h4>
            {props.product.productName}
            {props.product.color ? ` - ${props.product.color}` : ""}
            {props.product.size ? ` - ${props.product.size}` : ""}
            {props.product.comboId &&
              " - (Combo With " + (comboProduct?.name + ")")}
          </h4>
          <p>{props.product.productDesc}</p>
        </div>
      </div>
      <p>$ {props.product.price * props.product.amount}</p>
    </div>
  );
};
