import {
  HtmlHTMLAttributes,
  LegacyRef,
  forwardRef,
  // useState
} from "react";
import HorizontalMoveImageViewer, {
  HorizontalMoveImageViewerRef,
} from "@/components/atoms/HorizontalMoveImageViewer/HorizontalMoveImageViewer";
import "./IntroSection.css";
import { FormButton } from "@/components/atoms/FormButton/FormButton";
import { Link } from "react-router-dom";

interface IntroSectionProps extends HtmlHTMLAttributes<HTMLElement> {
  title: string;
  subTitle: string;
  images: string[];
  description: string;
  exploreUrl: string;
  onImageChange?: (index: number) => void;
}

const IntroSection = forwardRef(
  (props: IntroSectionProps, ref: LegacyRef<HorizontalMoveImageViewerRef>) => {
    //first letter of desc will be another font
    const firstLetter = props.description.charAt(0);
    const rest = props.description.slice(1);
    return (
      <section className="introduction-section">
        <div className="display">
          <HorizontalMoveImageViewer
            ref={ref}
            images={props.images}
            onImageChange={props.onImageChange}
            showArrow={true}
          />
        </div>
        <div className="details">
          {/* <div className="color-options">
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
        </div> */}
          <div className="info-container">
            <h2 className="title">{props.title}</h2>
            <h3 className="sub-title">{props.subTitle}</h3>
            <p className="desc">
              <span className="first-letter">{firstLetter}</span>
              {rest}
            </p>
          </div>
          <div className="form-button-container">
            <Link to={props.exploreUrl as string}>
              <FormButton>Explore More</FormButton>{" "}
            </Link>
          </div>
        </div>
        {props.children}
      </section>
    );
  }
);

export default IntroSection;
