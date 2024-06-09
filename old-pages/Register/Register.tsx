import { FormButton } from "@/components/atoms/FormButton/FormButton";
import { Input } from "@/components/atoms/Input/Input";
import { AccountLayout } from "@/components/layout/AccountLayout/AccountLayout";
import { Form } from "@/components/organisms/Form/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import styles from "./Register.module.css";
import Header from "@/components/organisms/Header/Header";

const RegisterSchema = z.object({
  firstName: z.string().min(2, { message: "First name is too short" }),
  lastName: z.string().min(2, { message: "Last name is too short" }),
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password is too short" })
    .regex(/[A-Z]/, { message: "Password must contain an uppercase letter" })
    .regex(/[a-z]/, { message: "Password must contain a lowercase letter" })
    .regex(/[0-9]/, { message: "Password must contain a number" }),
});

type RegisterFormData = z.infer<typeof RegisterSchema>; // Add new type

export const Register = () => {
  const methods = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema), // Apply the zodResolver
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: RegisterFormData) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <AccountLayout>
        <FormProvider {...methods}>
          <Form
            header="Register"
            subheader="Please fill in the information below:"
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
          >
            <Input label="First Name" name="firstName" />
            <Input label="Last Name" name="lastName" />
            <Input label="Email" name="email" />
            <Input label="Password" type="password" name="password" />
            <FormButton type="submit">Create My Account</FormButton>
          </Form>
        </FormProvider>
      </AccountLayout>
    </>
  );
};
