import { FormButton } from "@/components/atoms/FormButton/FormButton";
import "./CtaSectionRow.css";
import { HtmlHTMLAttributes } from "react";

export interface CtaSectionRowProps extends HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
  subTitle: string;
  description: string;
  buttonText: string;
  img: string;
  swap?: boolean;
}

export default function CtaSectionRow(props: CtaSectionRowProps) {
  return (
    <div className={`cta-section-row-container${props.swap ? " swap" : ""}`}>
      <div className="cta-section-row">
        <div className="cta-image-container">
          <img className="cta-image" src={props.img} />
        </div>
        <div className="cta-text-area">
          <h2 className="cta-title">{props.title}</h2>
          <h3 className="cta-sub-title">{props.subTitle}</h3>
          <p className="cta-desc">{props.description}</p>
          <div className="button-container">
            <FormButton>{props.buttonText}</FormButton>
          </div>
        </div>
      </div>
    </div>
  );
}
