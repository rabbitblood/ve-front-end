import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "./components/organisms/Header/Header";
import "react-image-gallery/styles/css/image-gallery.css";
import "@/css/overwrite/react-image-gallery/react-image-gallery.css";
import Banner from "./components/organisms/Banner/Banner";
import { FormButton } from "./components/atoms/FormButton/FormButton";
import { getDataByName } from "./lib/builderio/builderDataUtil";
import { useEffect, useState } from "react";
import CtaSectionRow from "./components/organisms/CtaSectionRow/CtaSectionRow";
import textImg from "@/assets/chocker-demo.webp";

function App() {
  const [slideData, setSlideData] = useState();

  useEffect(() => {
    getDataByName("home-page-banner").then((data) => {
      //console.log(data);

      setSlideData(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.bannerSlides.map((item: any) => {
          return {
            original: item.slideImage,
            thumbnail: item.slideImage,
            displayElement: (
              <div className="banner-text-container">
                <h3 className="sub-title">{item.subTitle}</h3>
                <h2 className="title">{item.title}</h2>
                <Link to={item.buttonUrl}>
                  <FormButton>{item.buttonText}</FormButton>{" "}
                </Link>
              </div>
            ),
            renderItem:
              item.assetType === "mp4" &&
              (() => {
                return (
                  <video
                    className=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={item.slideImage} type="video/mp4" />
                  </video>
                );
              }),
          };
        })
      );
    });
  }, []);

  const ctaData = [
    {
      title: "Pure",
      subTitle: "Series",
      description:
        "A Clean, Simple, Luxe, Versatile, Minimalist, All-Occasion Elegance series",
      buttonText: "Explore the series",
      img: textImg,
    },
    {
      title: "Classic",
      subTitle: "Series",
      description:
        "A Vibrant, iconic designs with exquisite, eye-catching appeal series",
      buttonText: "Explore the series",
      img: textImg,
      swap: true,
    },
    {
      title: "Rabbit",
      subTitle: "Series",
      description:
        "A Luxurious, 100% Handcrafted Python Leather Accessories Series",
      buttonText: "Explore the series",
      img: textImg,
    },
  ];

  return (
    <>
      <Header />
      <main>
        {slideData && <Banner slideData={slideData} />}
        <h1
          style={{
            margin: "auto",
            textAlign: "center",
            marginBottom: "3rem",
            fontWeight: "100",
          }}
        >
          New Collections
        </h1>
        <CtaSectionRow {...ctaData[0]} />
        <CtaSectionRow {...ctaData[1]} />
        <CtaSectionRow {...ctaData[2]} />
      </main>
      <Footer />
    </>
  );
}

export default App;
