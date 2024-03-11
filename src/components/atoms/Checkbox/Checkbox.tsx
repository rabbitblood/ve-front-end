import React, { useId } from "react";
import clsx from "clsx";
import styles from "./Checkbox.module.css";
import { useFormContext } from "react-hook-form";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

export const Checkbox = ({
  name,
  label,
  className,
  ...checkboxProps
}: Props) => {
  const { register } = useFormContext();
  const id = useId();
  return (
    <div className={styles.inputContainer}>
      <input
        {...register(name)}
        type="checkbox"
        id={id}
        className={clsx(styles.input, className)}
        placeholder={label}
        {...checkboxProps}
      />
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
