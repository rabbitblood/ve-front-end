import { useRouteError } from "react-router-dom";
import BasicLayout from "./components/layout/BasicLayout/BasicLayout";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <BasicLayout id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </BasicLayout>
  );
}
