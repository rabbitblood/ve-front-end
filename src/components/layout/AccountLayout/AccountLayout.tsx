import { PropsWithChildren } from "react";
import styles from "./AccountLayout.module.css";

export const AccountLayout = ({ children }: PropsWithChildren) => {
  return <div className={styles.wrapper}>{children}</div>;
};
