import { scrollToElement } from "@/lib/util/inPageNavUtil";
import arrowIcon from "@/assets/icons/arrow.svg";
import "./ToElementArrow.css";

interface ToElementArrowProps {
  toElementId: string;
  horizontalPosition?: "left" | "right" | "h-center";
  verticalPosition?: "top" | "bottom" | "v-center";
  buttonText?: string;
}

export default function ToElementArrow({
  horizontalPosition = "left",
  verticalPosition = "top",
  ...props
}: ToElementArrowProps) {
  return (
    <div
      className={`to-products-button ${horizontalPosition} ${verticalPosition}`}
      onClick={() => scrollToElement(props.toElementId)}
    >
      {props.buttonText && <p className="text">{props.buttonText}</p>}
      <img className="arrow-icon" src={arrowIcon.src} />
    </div>
  );
}
