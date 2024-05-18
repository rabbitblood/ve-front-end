import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "./components/organisms/Header/Header";
import "react-image-gallery/styles/css/image-gallery.css";
import "@/css/overwrite/react-image-gallery/react-image-gallery.css";
import Banner from "./components/organisms/Banner/Banner";
import { FormButton } from "./components/atoms/FormButton/FormButton";
import { getDataByName } from "./lib/builderio/builderDataUtil";
import { useEffect, useState } from "react";

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
                    src={item.slideImage}
                    autoPlay
                    muted
                    loop
                  />
                );
              }),
          };
        })
      );
    });
  }, []);
  return (
    <>
      <Header />
      <main>{slideData && <Banner slideData={slideData} />}</main>
      <Footer />
    </>
  );
}

export default App;
