import React from "react";
import styles from "./OrderSummary.module.css";

type Props = {
  className: string;
};

export const OrderSummary = ({ className }: Props) => {
  return (
    <div className={`${styles.orderSummary} ${className}`}>OrderSummary</div>
  );
};
