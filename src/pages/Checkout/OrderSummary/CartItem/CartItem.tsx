import { getProductById } from "@/lib/VeProduct/VeproductUtil";
import styles from "./CartItem.module.css";
import { modifyItemQuantity } from "@/lib/redux/store/cartSlice";
import { useAppDispatch } from "@/lib/redux/reduxDispatcher";
import { useRef } from "react";
interface Prop {
  product: VeCartItem;
}

export const CartItem = ({ product }: Prop) => {
  const itemAmountInput = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  function modifyItemQuantityHandler(amount: number) {
    dispatch(
      modifyItemQuantity({
        cartItem: product,
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
            defaultValue={product.amount.toString()}
            onKeyDown={(e) => {
              if (e.key === "e" || e.key === "+" || e.key === "-") {
                e.preventDefault();
              }
              if (e.key === "Enter") {
                modifyItemQuantityHandler(
                  Number(itemAmountInput.current?.value) ?? 0
                );
              }
            }}
          />
          <img
            src={product.imageUrl}
            alt={product.productName}
            className={styles.productImage}
          />
        </div>
        <div>
          <h4>
            {product.productName} - {product.color} - {product.size} - (
            {product.comboId &&
              "Combo With" + (getProductById(product.comboId)?.name ?? "")}
            )
          </h4>
          <p>{product.productDesc}</p>
        </div>
      </div>
      <p>$ {product.price * product.amount}</p>
    </div>
  );
};
