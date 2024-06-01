import { HtmlHTMLAttributes, useState } from "react";
import ImageGallery from "react-image-gallery";
import "./Banner.css";

export interface SlideData {
  original: string;
  thumbnail: string;
  displayElement?: JSX.Element;
  renderItem?: () => JSX.Element;
}

interface BannerProps extends HtmlHTMLAttributes<HTMLElement> {
  slideData?: SlideData[];
  fullScreen?: boolean;
  bulletType?: "normal" | "bottomLine";
}

export default function Banner({
  fullScreen = true,
  bulletType = "normal",
  ...props
}: BannerProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [displayingElement, setDisplayingElement] = useState<boolean>(true);

  function changeSlideHandler(index: number) {
    setCurrentSlideIndex(index);
    setDisplayingElement(true);
  }

  function beforeChangeHandler() {
    setDisplayingElement(false);
  }

  return (
    <>
      {props.slideData && props.slideData.length > 0 && (
        <div className={`banner ${fullScreen ? "" : "parent-size"}`}>
          <ImageGallery
            additionalClass="banner"
            items={props.slideData}
            showThumbnails={false}
            showFullscreenButton={false}
            showNav={false}
            showPlayButton={false}
            showBullets={bulletType === "normal"}
            autoPlay={true}
            slideInterval={99999999}
            infinite={true}
            disableSwipe={false}
            onBeforeSlide={() => beforeChangeHandler()}
            onSlide={(index: number) => changeSlideHandler(index)}
          />
          <div
            className={`banner-text-container ${
              displayingElement ? "" : "inactive"
            }`}
          >
            {props.slideData[currentSlideIndex].displayElement}
          </div>
          {bulletType === "bottomLine" && (
            <div className="bottom-line-bullets">
              {props.slideData.map((_, index) => (
                <div
                  key={index}
                  className={`bullet ${
                    currentSlideIndex === index ? "active" : ""
                  }`}
                ></div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
