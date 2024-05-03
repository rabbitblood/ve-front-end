import style from "./HorizontalMoveImageViewer.module.css";
import { useEffect, useRef, useState } from "react";

interface HorizontalMoveImageViewerProps
  extends React.HTMLAttributes<HTMLElement> {
  images: string[];
}

export default function HorizontalMoveImageViewer(
  props: HorizontalMoveImageViewerProps
) {
  const imageContainer = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    if (imageContainer.current) {
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
  }, [currentImageIndex, props.images.length]);

  function nextImageHandler() {
    if (props.images.length <= 1) return;
    if (currentImageIndex < props.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  }

  function prevImageHandler() {
    if (props.images.length <= 1) return;
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  }

  return (
    <>
      <div className={style["horizontal-move-image-viewer"]}>
        <div className={style["images"]}>
          <div className={style["image-container"]} ref={imageContainer}>
            {props.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="product"
                className={style["image"]}
              />
            ))}
          </div>
        </div>
        <div
          className={style["prev-image-click"]}
          onClick={() => prevImageHandler()}
        />
        <div
          className={style["next-image-click"]}
          onClick={() => nextImageHandler()}
        />
      </div>
    </>
  );
}
