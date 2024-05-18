import style from "./HorizontalMoveImageViewer.module.css";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import arrowIcon from "./arrow.svg";
import { useSwipeable } from "react-swipeable";

interface HorizontalMoveImageViewerProps
  extends React.HTMLAttributes<HTMLElement> {
  images: string[];
  onImageChange?: (index: number) => void;
  showArrow?: boolean;
}

export interface HorizontalMoveImageViewerRef
  extends React.RefObject<{ backToInitialPosition: () => void }> {}

const HorizontalMoveImageViewer = forwardRef<
  HorizontalMoveImageViewerRef,
  HorizontalMoveImageViewerProps
>((props, ref) => {
  const imageContainer = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextImageHandler(),
    onSwipedRight: () => prevImageHandler(),
    onSwiping: (eventData) => {
      if (imageContainer.current) {
        const image = imageContainer.current.children.item(
          currentImageIndex
        ) as HTMLImageElement;
        image.style.transition = "none";
        image.style.transform = `translateX(${eventData.deltaX}px)`;
      }
    },
    onSwiped: () => {
      const image = imageContainer.current?.children.item(
        currentImageIndex
      ) as HTMLImageElement;
      image.style.transition = "";
      image.style.transform = ``;
    },
  });

  useImperativeHandle(ref, () => ({
    current: {
      backToInitialPosition: backToInitialPosition,
    },
  }));

  useEffect(() => {
    if (imageContainer.current && props.images) {
      for (let i = 0; i < props.images.length; i++) {
        const image = imageContainer.current.children.item(
          i
        ) as HTMLImageElement;

        if (i == currentImageIndex - 2) {
          image.className = style["image"] + " " + style[`image--2`];
        } else if (i == currentImageIndex - 1) {
          image.className = style["image"] + " " + style[`image--1`];
        } else if (i == currentImageIndex) {
          image.className = style["image"] + " " + style[`image-0`];
        } else if (i == currentImageIndex + 1) {
          image.className = style["image"] + " " + style[`image-1`];
        } else if (i == currentImageIndex + 2) {
          image.className = style["image"] + " " + style[`image-2`];
        } else {
          image.className = style["image"];
        }
      }
    }
  }, [currentImageIndex, props.images]);

  useEffect(() => {
    backToInitialPosition();
  }, [props.images.length]);

  function nextImageHandler() {
    if (props.images.length <= 1) return;
    if (currentImageIndex < props.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
    if (props.onImageChange) {
      props.onImageChange(currentImageIndex + 1);
    }
  }

  function prevImageHandler() {
    if (props.images.length <= 1) return;
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
    if (props.onImageChange) {
      props.onImageChange(currentImageIndex - 1);
    }
  }

  function backToInitialPosition() {
    setCurrentImageIndex(0);
  }

  return (
    <>
      <div className={style["horizontal-move-image-viewer"]} {...swipeHandlers}>
        <div className={style["images"]}>
          <div className={style["image-container"]} ref={imageContainer}>
            {props.images &&
              props.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="product"
                  className={style["image"]}
                />
              ))}
          </div>
        </div>
        {currentImageIndex != 0 && (
          <div
            className={style["prev-image-click"]}
            onClick={() => prevImageHandler()}
          >
            {props.showArrow && (
              <img src={arrowIcon} className={style["arrow"]}></img>
            )}
          </div>
        )}
        {currentImageIndex != props.images.length - 1 && (
          <div
            className={style["next-image-click"]}
            onClick={() => nextImageHandler()}
          >
            {props.showArrow && (
              <img src={arrowIcon} className={style["arrow"]}></img>
            )}
          </div>
        )}
      </div>
    </>
  );
});

export default HorizontalMoveImageViewer;
