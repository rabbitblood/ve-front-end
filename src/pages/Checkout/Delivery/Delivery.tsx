import { RadioGroup } from "@/components/atoms/RadioGroup/RadioGroup";
import { Controller, useFormContext } from "react-hook-form";
import ShippingIcon from "./asset/shipping.svg";
import PickupIcon from "./asset/pickup.svg";
import { AddressFields } from "../AddressFields/AddressFields";
import styles from "./Delivery.module.css";
import { Checkbox } from "@/components/atoms/Checkbox/Checkbox";

const deliveryOptions = [
  {
    label: "Ship",
    value: "ship",
    icon: ShippingIcon,
  },
  {
    label: "Pickup",
    value: "pickup",
    icon: PickupIcon,
  },
];

const pickupOptions = [
  {
    header: (
      <div className={styles.pickupLocation}>
        <div>123 Main St.</div>
        <div>Free</div>
      </div>
    ),
    value: "store1",
  },
  {
    header: (
      <div className={styles.pickupLocation}>
        <div>456 Elm St.</div>
        <div>Free</div>
      </div>
    ),
    value: "store2",
  },
];

export const Delivery = () => {
  const { control, watch } = useFormContext();

  const needsShipping = watch("needsShipping");

  return (
    <section>
      <h2>Delivery</h2>
      <Controller
        name="needsShipping"
        control={control}
        render={({ field: { ref, value, onChange, ...props } }) => (
          <RadioGroup
            options={deliveryOptions}
            value={value ? "ship" : "pickup"}
            onChange={(value) => {
              onChange(value === "ship");
            }}
            {...props}
          />
        )}
      />
      <div className={styles.shippingDetails}>
        {needsShipping ? (
          <AddressFields namePrefix="shipping" />
        ) : (
          <div className={styles.pickup}>
            <h3>Pickup Locations</h3>
            <h4>
              There are {pickupOptions.length} stores with stock close to your
              location
            </h4>
            <Controller
              name="pickupLocation"
              control={control}
              render={({ field: { ref, ...props } }) => (
                <RadioGroup options={pickupOptions} {...props} />
              )}
            />
          </div>
        )}
      </div>
      <Checkbox name="textSubscribe" label="Text me with news and offers" />
    </section>
  );
};
