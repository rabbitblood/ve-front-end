import { ComponentPropsWithRef } from "react";
import styles from "./FormButton.module.css";

interface FormButtonProps extends ComponentPropsWithRef<"button"> {
  additionalClasses?: string;
}

export const FormButton = (props: FormButtonProps) => {
  return (
    <button
      className={styles.button + " " + props.additionalClasses}
      {...props}
    >
      {props.children}
    </button>
  );
};
