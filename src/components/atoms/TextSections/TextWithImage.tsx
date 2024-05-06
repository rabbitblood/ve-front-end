import { useEffect, useRef, useState } from "react";
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
  const [halfwayParent, setHalfwayParent] = useState(false);

  useEffect(() => {
    isHalfWayThroughParentElement();
  }, [isHalfWayThroughParentElement, props.parentRef]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function isHalfWayThroughParentElement() {
    if (!props.parentRef?.current || !block.current) {
      setTimeout(() => {
        isHalfWayThroughParentElement();
      }, 1000);
      setHalfwayParent(false);
    } else {
      setHalfwayParent(
        block.current.offsetTop >
          (props.parentRef?.current?.clientHeight ?? 0) / 2
      );
    }
  }

  return (
    <div
      ref={block}
      className={"text-with-image" + (props.textRight ? " text-right" : "")}
    >
      <div
        className="text-group"
        style={{
          color: props.color ?? (halfwayParent ? "black" : "white"),
        }}
      >
        <h2 className="title">{props.title}</h2>
        <p className="text">{props.text}</p>
      </div>
      <img className="image" src={props.image} />
    </div>
  );
}
