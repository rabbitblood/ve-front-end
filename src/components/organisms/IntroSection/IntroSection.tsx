import { HtmlHTMLAttributes, useState } from "react";
import HorizontalMoveImageViewer from "@/components/atoms/HorizontalMoveImageViewer/HorizontalMoveImageViewer";
import "./IntroSection.css";
import ProductData from "@/data/mockData";
import { FormButton } from "@/components/atoms/FormButton/FormButton";

interface IntroSectionProps extends HtmlHTMLAttributes<HTMLElement> {
  title: string;
  subTitle: string;
  images: string[];
  description: string;
}

export default function IntroSection(props: IntroSectionProps) {
  const [selectedColor, setSelectedColor] = useState(
    ProductData.colorOptions[0]
  );
  return (
    <section className="introduction-section">
      <div className="display">
        <HorizontalMoveImageViewer images={props.images} />
      </div>
      <div className="details">
        <div className="color-options">
          {ProductData.colorOptions.map((color, idx) => {
            return (
              <div
                key={idx}
                className={
                  "color-option" + (selectedColor === color ? " selected" : "")
                }
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              ></div>
            );
          })}
        </div>
        <h2 className="title">{props.title}</h2>
        <h3 className="sub-title">{props.subTitle}</h3>
        <p className="price">{props.description}</p>
        <p className="desc">{props.description}</p>
        <div className="form-button-container">
          <FormButton>Explore More</FormButton>{" "}
        </div>
      </div>
      {props.children}
    </section>
  );
}
