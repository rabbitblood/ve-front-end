import styles from "./CartItem.module.css";

type Props = {
  product: {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    quantity: number;
  };
};

export const CartItem = ({ product }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardLeft}>
        <div className={styles.imageWrapper}>
          <div className={styles.quantity}>{product.quantity}</div>
          <img
            src={product.image}
            alt={product.name}
            className={styles.productImage}
          />
        </div>
        <div>
          <h4>{product.name}</h4>
          <p>{product.description}</p>
        </div>
      </div>
      <p>$ {product.price * product.quantity}</p>
    </div>
  );
};
