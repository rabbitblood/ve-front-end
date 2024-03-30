import { ComponentPropsWithRef } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./Select.module.css";

type Props = ComponentPropsWithRef<"select"> & {
  options: string[];
  name: string;
  label: string;
};

export const Select = ({ options, label, name }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paths = name.split(".");
  const errorMessage = paths.reduce((acc, path) => {
    return acc?.[Number(path)];
  }, errors?.message as string | undefined);

  return (
    <div className={styles.selectContainer}>
      <label className={styles.label}>{label}</label>
      <select className={styles.select} {...register(name)}>
        <option value="">-- Select an option --</option>
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <p className={styles.errorMessage}>{errorMessage ?? ""}</p>
    </div>
  );
};
