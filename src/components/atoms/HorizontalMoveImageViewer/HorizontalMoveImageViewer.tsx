import style from "./HorizontalMoveImageViewer.module.css";
import { useEffect, useRef, useState } from "react";

export default function HorizontalMoveImageViewer({
  images,
}: {
  images: string[];
}) {
  const imageContainer = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    if (imageContainer.current) {
      for (let i = 0; i < images.length; i++) {
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
  }, [currentImageIndex, images.length]);

  function nextImageHandler() {
    if (images.length <= 1) return;
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  }

  function prevImageHandler() {
    if (images.length <= 1) return;
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  }

  return (
    <>
      <div className={style["horizontal-move-image-viewer"]}>
        <div className={style["images"]}>
          <div className={style["image-container"]} ref={imageContainer}>
            {images.map((image, index) => (
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
