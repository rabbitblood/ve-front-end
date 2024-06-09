import { Checkbox } from "@/components/atoms/Checkbox/Checkbox";
import { Input } from "@/components/atoms/Input/Input";
import { FormFields } from "@/components/organisms/FormFields/FormFields";

export const Contact = () => {
  return (
    <section>
      <h2>Contact</h2>
      <FormFields>
        <Input label="Email" name="email" />
        <Checkbox label="Subscribe to newsletter" name="emailSubscribe" />
      </FormFields>
    </section>
  );
};
