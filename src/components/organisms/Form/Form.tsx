import { PropsWithChildren } from "react";
import styles from "./Form.module.css";

type Props = {
  header: string;
  subheader?: string;
} & React.FormHTMLAttributes<HTMLFormElement>;

export const Form = ({
  header,
  subheader,
  children,
  className,
  ...formProps
}: PropsWithChildren<Props>) => {
  return (
    <form className={styles.form} {...formProps}>
      <h2>{header}</h2>
      {subheader && <p>{subheader}</p>}
      <div className={className}>{children}</div>
    </form>
  );
};
