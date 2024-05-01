import { useParams } from "react-router-dom";
import BasicLayout from "@/components/layout/BasicLayout/BasicLayout";
import IntroSection from "@/components/organisms/IntroSection/IntroSection";
export default function ProductIntro() {
  //get param
  const { type } = useParams<{ type: string }>();

  const images = [
    "https://via.placeholder.com/300x500",
    "https://via.placeholder.com/300x600",
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/300x300",
    "https://via.placeholder.com/300x100",
  ];

  return (
    <BasicLayout>
      <IntroSection
        title="Product Intro"
        subTitle={type ? type : ""}
        images={images}
        description="Product Intro"
      />
    </BasicLayout>
  );
}
