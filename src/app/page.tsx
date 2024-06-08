import HomePageBanner from "@/components/layout/HomePageBanner/HomePageBanner";
import CtaSectionRow from "@/components/organisms/CtaSectionRow/CtaSectionRow";
import BasicLayout from "@/components/page/BasicLayout/BasicLayout";
import { Metadata } from "next";
import {
  generalKeywordsMetaData,
  generalTitleMetaData,
  generalDescriptionMetaData,
} from "@/data/SEOData";

import testCtaImage from "@/assets/testFiles/testCTA.jpg";
import textImg from "@/assets/chocker-demo.webp";

export const metadata: Metadata = {
  title: `${generalTitleMetaData} | Home Page`,
  description: `Vé Home Page. ${generalDescriptionMetaData}`,
  keywords: generalKeywordsMetaData,
};

export default function Page() {
  const ctaData = [
    {
      title: "Pure",
      subTitle: "Series",
      description:
        "A Clean, Simple, Luxe, Versatile, Minimalist, All-Occasion Elegance series",
      buttonText: "Explore the series",
      img: testCtaImage.src,
      link: "/products/ProductIntro/choker?serie=pure",
    },
    {
      title: "Classic",
      subTitle: "Series",
      description:
        "A Vibrant, iconic designs with exquisite, eye-catching appeal series",
      buttonText: "Explore the series",
      img: textImg.src,
      swap: true,
      link: "/products/ProductIntro/choker?serie=classic",
    },
    {
      title: "Rabbit",
      subTitle: "Series",
      description:
        "A Luxurious, 100% Handcrafted Python Leather Accessories Series",
      buttonText: "Explore the series",
      img: textImg.src,
      link: "/products/ProductIntro/accessory",
    },
  ];
  return (
    <BasicLayout>
      {" "}
      <HomePageBanner />
      <h1 className="new-collection-section-title">New Collections</h1>
      <CtaSectionRow {...ctaData[0]} />
      <CtaSectionRow {...ctaData[1]} />
      <CtaSectionRow {...ctaData[2]} />
    </BasicLayout>
  );
}
