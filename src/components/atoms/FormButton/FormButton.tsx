import { ComponentPropsWithRef, PropsWithChildren } from "react";
import styles from "./FormButton.module.css";

export const FormButton = ({
  children,
}: PropsWithChildren<ComponentPropsWithRef<"button">>) => {
  return <button className={styles.button}>{children}</button>;
};
