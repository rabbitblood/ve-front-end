import { FormButton } from "@/components/atoms/FormButton/FormButton";
import { Input } from "@/components/atoms/Input/Input";
import { AccountLayout } from "@/components/layout/AccountLayout";
import { Form } from "@/components/organisms/Form/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import Header from "@/components/organisms/Header/Header";

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type LoginFormData = z.infer<typeof LoginSchema>;

export const Login = () => {
  const methods = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <AccountLayout>
        <FormProvider {...methods}>
          <Form
            header="Login"
            subheader="Please fill in the information below:"
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
          >
            <Input label="Email" name="email" />
            <Input label="Password" type="password" name="password" />
            <FormButton type="submit">Login</FormButton>
            <div className={styles.footer}>
              <p>Don't have an account?</p>
              <Link to="/account/register">Create One</Link>
            </div>
          </Form>
        </FormProvider>
      </AccountLayout>
    </>
  );
};
