import { HtmlHTMLAttributes, useState } from "react";
import ImageGallery from "react-image-gallery";

interface SlideData {
  original: string;
  thumbnail: string;
  displayElement?: JSX.Element;
}

interface BannerProps extends HtmlHTMLAttributes<HTMLElement> {
  slideData?: SlideData[];
}

export default function Banner(props: BannerProps) {
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
        <div className="banner">
          <ImageGallery
            additionalClass="banner"
            items={props.slideData}
            showThumbnails={false}
            showFullscreenButton={false}
            showNav={false}
            showPlayButton={false}
            showBullets={true}
            autoPlay={true}
            slideInterval={5000}
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
        </div>
      )}
    </>
  );
}
