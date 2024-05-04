import { ComponentPropsWithRef, PropsWithChildren } from "react";
import styles from "./FormButton.module.css";

export const FormButton = (
  props: PropsWithChildren<ComponentPropsWithRef<"button">>
) => {
  return (
    <button className={styles.button} {...props}>
      {props.children}
    </button>
  );
};
