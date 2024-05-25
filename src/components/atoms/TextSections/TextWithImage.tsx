import { useRef } from "react";
import "./TextSections.css";
import { StringToUppercasedFirstLetterParagraphElement } from "@/lib/util/paragraphUtil";

interface Props {
  title?: string;
  text?: string;
  image?: string;
  textRight?: boolean;
  color?: string;
  parentRef?: React.RefObject<HTMLDivElement>;
}

export default function TextWithImage(props: Props) {
  const block = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={block}
      className={"text-with-image" + (props.textRight ? " text-right" : "")}
    >
      <img className="image" src={props.image} />
      <div className="text-group">
        <h2 className="title">{props.title}</h2>
        <StringToUppercasedFirstLetterParagraphElement
          str={props.text ?? ""}
          elementClassName="paragraph text"
          spanClassName="first-letter"
        />
      </div>
    </div>
  );
}
