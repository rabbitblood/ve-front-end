import BasicLayout from "@/components/layout/BasicLayout/BasicLayout";
import builder, { BuilderComponent } from "@builder.io/react";
import { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";

export default function PureTextInfoPage() {
  //const { pagename } = useParams<{ pagename: string }>();

  const [builderContentJson, setBuilderContentJson] = useState(null);

  useEffect(() => {
    builder
      .get("custom-page", {
        url: "https://vestudio.ca/info/return-and-refund",
      })
      .promise()
      .then((data) => {
        console.log(data);
        setBuilderContentJson(data);
      });
  }, []);

  return (
    <BasicLayout>
      {builderContentJson && (
        <BuilderComponent model="custom-page" content={builderContentJson} />
      )}
    </BasicLayout>
  );
}
