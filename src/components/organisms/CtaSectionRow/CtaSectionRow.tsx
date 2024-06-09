import { FormButton } from "@/components/atoms/FormButton/FormButton";
import "./CtaSectionRow.css";
import { HtmlHTMLAttributes } from "react";
import Link from "next/link";
import Image from "next/image";

export interface CtaSectionRowProps extends HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
  subTitle: string;
  description: string;
  buttonText: string;
  img: string;
  swap?: boolean;
  link: string;
}

export default function CtaSectionRow(props: CtaSectionRowProps) {
  return (
    <div className={`cta-section-row-container${props.swap ? " swap" : ""}`}>
      <div className="cta-section-row">
        <div className="cta-image-container">
          <Image
            className="cta-image"
            src={props.img}
            width={1024}
            height={1024}
            alt={props.title}
          />
        </div>
        <div className="cta-text-area">
          <h2 className="cta-title">
            {props.title}
            <span className="cta-sub-title">{props.subTitle}</span>
          </h2>
          <h3 className="cta-desc">{props.description}</h3>
          <div className="button-container">
            <Link href={props.link}>
              <FormButton>{props.buttonText}</FormButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
