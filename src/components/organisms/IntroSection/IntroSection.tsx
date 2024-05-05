import {
  HtmlHTMLAttributes,
  // useState
} from "react";
import HorizontalMoveImageViewer from "@/components/atoms/HorizontalMoveImageViewer/HorizontalMoveImageViewer";
import "./IntroSection.css";
import { FormButton } from "@/components/atoms/FormButton/FormButton";
import { Link } from "react-router-dom";

interface IntroSectionProps extends HtmlHTMLAttributes<HTMLElement> {
  title: string;
  subTitle: string;
  images: string[];
  description: string;
  exploreUrl: string;
}

export default function IntroSection(props: IntroSectionProps) {
  // const [selectedColor, setSelectedColor] = useState(
  //   ProductData.colorOptions[0]
  // );
  return (
    <section className="introduction-section">
      <div className="display">
        <HorizontalMoveImageViewer images={props.images} />
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
          <p className="price">{"Start From 130CAD / 100USD"}</p>
          <p className="desc">{props.description}</p>
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
