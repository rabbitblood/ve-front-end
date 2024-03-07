import clsx from "clsx";
import styles from "./Input.module.css";
import { useFormContext } from "react-hook-form";

type Props = {
  label: string;
  name: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, name, className, ...inputProps }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const errorMessage = errors[name]?.message as string | undefined;

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
