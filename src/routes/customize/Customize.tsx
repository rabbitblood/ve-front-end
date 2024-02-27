import { useState, Dispatch, SetStateAction } from "react";
import ChooseColor from "./ChooseColor";

type CustomizeState = "color" | "decoration" | "engraving" | "review";

export type colorProperty = {
  color1: string;
  color2?: string;
};

export type chooseColorParam = {
  currentColor: colorProperty;
  setCurrentColor: Dispatch<SetStateAction<colorProperty>>;
};

export default function Customize() {
  const [customizeState, setCustomizeState] = useState<CustomizeState>("color");
  const [currentColor, setCurrentColor] = useState<colorProperty>({
    color1: "Black",
    color2: "Black",
  } as colorProperty);

  const displayContent = () => {
    switch (customizeState) {
      case "color":
        return (
          <ChooseColor
            {...{
              currentColor,
              setCurrentColor,
            }}
          />
        );
      case "decoration":
        return <div>Decoration</div>;
      case "engraving":
        return <div>Engraving</div>;
      case "review":
        return <div>Review</div>;
    }
  };

  return (
    <div className="customize">
      <div className="brand-name">Vé</div>
      <nav>
        <li
          onClick={() => setCustomizeState("color")}
          className={customizeState === "color" ? "active" : ""}
        >
          Step:1 Color
        </li>
        <li
          onClick={() => setCustomizeState("decoration")}
          className={customizeState === "decoration" ? "active" : ""}
        >
          Step:2 Decorations
        </li>
        <li
          onClick={() => setCustomizeState("engraving")}
          className={customizeState === "engraving" ? "active" : ""}
        >
          Step:3 Engraving
        </li>
        <li
          onClick={() => setCustomizeState("review")}
          className={customizeState === "review" ? "active" : ""}
        >
          Step:4 Review
        </li>
      </nav>
      <div className="displayContents">{displayContent()}</div>
    </div>
  );
}
