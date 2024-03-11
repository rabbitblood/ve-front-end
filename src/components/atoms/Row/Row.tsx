import { PropsWithChildren } from "react";
import styles from "./Row.module.css";

export const Row = ({ children }: PropsWithChildren) => {
  return <div className={styles.row}>{children}</div>;
};
