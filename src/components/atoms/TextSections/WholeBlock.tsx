import { StringToUppercasedFirstLetterParagraphElement } from "@/lib/util/paragraphUtil";
import "./TextSections.css";

interface Props {
  title?: string;
  text?: string;
  image?: string;
  color?: string;
  parentRef?: React.RefObject<HTMLDivElement>;
}

export default function WholeBlock(props: Props) {
  return (
    <div className="whole-block">
      {props.image ? (
        <img className="image" src={props.image} />
      ) : (
        <div>
          <h2 className="title">{props.title}</h2>
          <StringToUppercasedFirstLetterParagraphElement
            str={props.text ?? ""}
            elementClassName="paragraph text"
            spanClassName="first-letter"
          />
        </div>
      )}
    </div>
  );
}
