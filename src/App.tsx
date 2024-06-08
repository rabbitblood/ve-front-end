import Footer from "@/components/organisms/Footer/Footer";
import Header from "./components/organisms/Header/Header";
import "react-image-gallery/styles/css/image-gallery.css";
import "@/css/overwrite/react-image-gallery/react-image-gallery.css";
import CtaSectionRow from "./components/organisms/CtaSectionRow/CtaSectionRow";
import textImg from "@/assets/chocker-demo.webp";
import DocumentMeta from "react-document-meta";
import {
  generalKeywordsMetaData,
  generalTitleMetaData,
  generalDescriptionMetaData,
} from "./data/SEOData";

//test image
import testCtaImage from "@/assets/testFiles/testCTA.jpg";
import HomePageBanner from "./components/layout/HomePageBanner/HomePageBanner";

function App() {
  // meta data
  const meta = {
    title: `${generalTitleMetaData} | Home Page`,
    description: `Vé Home Page. ${generalDescriptionMetaData}`,
    meta: {
      charset: "utf-8",
      name: {
        keywords: generalKeywordsMetaData,
      },
    },
  };

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
    <DocumentMeta {...meta}>
      <Header />
      <main>
        <HomePageBanner />
        <h1 className="new-collection-section-title">New Collections</h1>
        <CtaSectionRow {...ctaData[0]} />
        <CtaSectionRow {...ctaData[1]} />
        <CtaSectionRow {...ctaData[2]} />
      </main>
      <Footer />
    </DocumentMeta>
  );
}

export default App;
