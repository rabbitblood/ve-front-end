import BasicLayout from "@/components/layout/BasicLayout/BasicLayout";
import { useParams } from "react-router-dom";

export default function PureTextInfoPage() {
  const { pagename } = useParams<{ pagename: string }>();

  return (
    <BasicLayout>
      <div>
        <h2>{pagename}</h2>
        <h1>PureTextInfoPage</h1>
        <pre>{`"text
         in this 
         page"`}</pre>
      </div>
    </BasicLayout>
  );
}
