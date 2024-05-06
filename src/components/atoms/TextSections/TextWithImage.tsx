import { useRef } from "react";
import "./TextSections.css";

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

  function isHalfWayThroughParentElement() {
    if (!props.parentRef?.current || !block.current) return false;
    return (
      block.current?.offsetTop > props.parentRef?.current?.clientHeight / 2
    );
  }

  return (
    <div
      ref={block}
      className={"text-with-image" + (props.textRight ? " text-right" : "")}
    >
      <div
        className="text-group"
        style={{
          color:
            props.color ??
            (isHalfWayThroughParentElement() ? "black" : "white"),
        }}
      >
        <h2 className="title">{props.title}</h2>
        <p className="text">{props.text}</p>
      </div>
      <img className="image" src={props.image} />
    </div>
  );
}
