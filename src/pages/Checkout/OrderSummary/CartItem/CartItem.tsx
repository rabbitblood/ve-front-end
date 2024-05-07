import { getProductById } from "@/lib/VeProduct/VeproductUtil";
import styles from "./CartItem.module.css";

interface Prop {
  product: VeCartItem;
}

export const CartItem = ({ product }: Prop) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardLeft}>
        <div className={styles.imageWrapper}>
          <div className={styles.quantity}>{product.amount}</div>
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
