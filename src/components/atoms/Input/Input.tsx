import clsx from "clsx";
import styles from "./Input.module.css";
import { useFormContext } from "react-hook-form";
import { ComponentPropsWithRef } from "react";

type Props = ComponentPropsWithRef<"input"> & {
  label: string;
  name: string;
};

export const Input = ({ label, name, className, ...inputProps }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paths = name.split(".");
  const errorMessage = paths.reduce((acc, path) => {
    return acc?.[Number(path)];
  }, errors?.message as string | undefined);

  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <input
        {...register(name)}
        className={clsx(styles.input, className)}
        placeholder={label}
        {...inputProps}
      />
      <p className={styles.errorMessage}>{errorMessage ?? ""}</p>
    </div>
  );
};
