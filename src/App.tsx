import { Link } from "react-router-dom";
import Footer from "@/components/organisms/Footer/Footer";
import Header from "./components/organisms/Header/Header";
import "react-image-gallery/styles/css/image-gallery.css";
import "@/css/overwrite/react-image-gallery/react-image-gallery.css";
import Banner from "./components/organisms/Banner/Banner";
import { FormButton } from "./components/atoms/FormButton/FormButton";
import { getDataByName } from "./lib/builderio/builderDataUtil";
import { useEffect, useState } from "react";
import CtaSectionRow from "./components/organisms/CtaSectionRow/CtaSectionRow";
import textImg from "@/assets/chocker-demo.webp";
import { useIsMobile } from "./hooks/pageUtil";

//test image
import testCtaImage from "@/assets/testFiles/testCTA.jpg";

function App() {
  const isMobile = useIsMobile();
  const [slideData, setSlideData] = useState();

  useEffect(() => {
    getDataByName("home-page-banner").then((data) => {
      //console.log(data);

      setSlideData(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.bannerSlides.map((item: any, idx: number) => {
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
                const element = (
                  <video
                    className={`video${idx}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    controls={isMobile}
                    autoPlay
                    muted
                    loop
                    playsInline
                    webkit-playsinline="true"
                    x-webkit-airplay="true"
                    x5-video-player-type="h5"
                    x5-video-player-fullscreen="true"
                    x5-video-orientation="portrait"
                    poster={item.videoPoster}
                  >
                    <source src={item.slideImage} type="video/mp4" />
                  </video>
                );
                setTimeout(() => {
                  function doPlay() {
                    WeixinJSBridge.invoke("getNetworkType", {}, function (e) {
                      const $video: JQuery<HTMLVideoElement> = $(`video${idx}`);
                      $video[0].play();
                      console.log("invoke getNetworkType");

                      setTimeout(() => {
                        const isVideoPlaying =
                          $video[0].currentTime > 0 &&
                          !$video[0].paused &&
                          !$video[0].ended &&
                          $video[0].readyState > 2;
                        console.log(isVideoPlaying);
                        if (!isVideoPlaying) {
                          $video[0].play();
                        }
                      }, 500);
                    });
                  }

                  console.log("start");

                  if (window.WeixinJSBridge) {
                    console.log("start2");
                    doPlay();
                  } else {
                    console.log("start3");
                    document.addEventListener(
                      "WeixinJSBridgeReady",
                      function () {
                        doPlay();
                      },
                      false
                    );
                  }
                }, 500);

                return <>{element}</>;
              }),
          };
        })
      );
    });
  }, [isMobile]);

  const ctaData = [
    {
      title: "Pure",
      subTitle: "Series",
      description:
        "A Clean, Simple, Luxe, Versatile, Minimalist, All-Occasion Elegance series",
      buttonText: "Explore the series",
      img: testCtaImage,
      link: "/products/ProductIntro/choker?serie=pure",
    },
    {
      title: "Classic",
      subTitle: "Series",
      description:
        "A Vibrant, iconic designs with exquisite, eye-catching appeal series",
      buttonText: "Explore the series",
      img: textImg,
      swap: true,
      link: "/products/ProductIntro/choker?serie=classic",
    },
    {
      title: "Rabbit",
      subTitle: "Series",
      description:
        "A Luxurious, 100% Handcrafted Python Leather Accessories Series",
      buttonText: "Explore the series",
      img: textImg,
      link: "/products/ProductIntro/accessory",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {slideData && <Banner slideData={slideData} />}
        <h1 className="new-collection-section-title">New Collections</h1>
        <CtaSectionRow {...ctaData[0]} />
        <CtaSectionRow {...ctaData[1]} />
        <CtaSectionRow {...ctaData[2]} />
      </main>
      <Footer />
    </>
  );
}

export default App;
