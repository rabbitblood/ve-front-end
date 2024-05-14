import BasicLayout from "@/components/layout/BasicLayout/BasicLayout";
import { useAppDispatch } from "@/lib/redux/reduxDispatcher";
import { setNav } from "@/lib/redux/store/navSlice";
import builder, { BuilderComponent } from "@builder.io/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PureTextInfoPage() {
  const { pagename } = useParams<{ pagename: string }>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setNav({
        nav: [
          { name: "Home", url: "/" },
          {
            name: pagename ?? "",
            url: `${window.location.pathname}`,
          },
        ],
      })
    );
  }, [dispatch]);

  const [builderContentJson, setBuilderContentJson] = useState(null);

  useEffect(() => {
    builder
      .get("custom-page", {
        url: window.location.pathname,
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
