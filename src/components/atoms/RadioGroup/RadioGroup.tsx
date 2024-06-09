import { Fragment, ReactNode } from "react";
import styles from "./RadioGroup.module.css";
import clsx from "clsx";

type Props = {
  options: (
    | {
        value: string;
        body?: ReactNode;
      } & (
        | {
            label: string;
            icon: string;
          }
        | {
            header: ReactNode;
          }
      )
  )[];
  value: string;
  onChange: (value: string) => void;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const hasHeader = (option: any): option is { header: ReactNode } => {
  return "header" in option;
};

export const RadioGroup = ({ options, value, onChange }: Props) => {
  return (
    <div>
      {options.map((option) => {
        return (
          <Fragment key={option.value}>
            <button
              type="button"
              onClick={() => {
                if (option.value !== value) {
                  onChange(option.value);
                }
              }}
              className={clsx(
                styles.option,
                option.value === value && styles.active
              )}
            >
              {hasHeader(option) ? (
                option.header
              ) : (
                <>
                  <div>
                    <div
                      className={clsx(
                        styles.radio,
                        option.value === value && styles.active
                      )}
                    />
                    <p>{option.label}</p>
                  </div>
                  <img
                    src={option.icon}
                    alt={option.label}
                    className={styles.icon}
                  />
                </>
              )}
            </button>
            {option.value === value && option.body}
          </Fragment>
        );
      })}
    </div>
  );
};
