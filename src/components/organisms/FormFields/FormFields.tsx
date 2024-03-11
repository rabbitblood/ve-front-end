import { PropsWithChildren } from "react";
import styles from "./FormFields.module.css";

export const FormFields = ({ children }: PropsWithChildren) => {
  return <div className={styles.formFields}>{children}</div>;
};
