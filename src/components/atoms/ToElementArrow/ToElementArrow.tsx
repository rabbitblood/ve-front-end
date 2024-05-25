import { scrollToElement } from "@/lib/util/inPageNavUtil";
import arrowIcon from "@/assets/icons/arrow.svg";
import "./ToElementArrow.css";

interface ToElementArrowProps {
  toElementId: string;
  position?: "left" | "right" | "center";
  buttonText?: string;
}

export default function ToElementArrow({
  position = "left",
  ...props
}: ToElementArrowProps) {
  return (
    <div className={`to-products-button ${position}`}>
      {props.buttonText && <p className="text">{props.buttonText}</p>}
      <img
        className="arrow-icon"
        src={arrowIcon}
        onClick={() => scrollToElement(props.toElementId)}
      />
    </div>
  );
}
