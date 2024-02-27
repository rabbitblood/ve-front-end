import { useState, Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import ChooseColor from "./ChooseColor";
import "@/css/customize/customize.css";

export type colorProperty = {
  color1: string;
  color2?: string;
};

export type chooseColorParam = {
  currentColor: colorProperty;
  setCurrentColor: Dispatch<SetStateAction<colorProperty>>;
};

type customizeSteps = {
  "step-name": string;
  element: JSX.Element;
};

export default function Customize() {
  const [customizeState, setCustomizeState] = useState<number>(1);
  const [currentColor, setCurrentColor] = useState<colorProperty>({
    color1: "Black",
    color2: "Black",
  } as colorProperty);

  const customizeSteps: { [key: number]: customizeSteps } = {
    1: {
      "step-name": "color",
      element: (
        <ChooseColor
          {...{
            currentColor,
            setCurrentColor,
          }}
        />
      ),
    },
    2: {
      "step-name": "decoration",
      element: <>decoration</>,
    },
    3: {
      "step-name": "engraving",
      element: <>engraving</>,
    },
    4: {
      "step-name": "review",
      element: <>review</>,
    },
  };

  function goToStep(step: number) {
    setCustomizeState(step);
  }

  return (
    <div className="customize">
      <Link to={"/"} className="brand-name">
        Vé
      </Link>
      <nav className="customize-step-nav">
        {Object.keys(customizeSteps).map((step, index) => (
          <li
            key={index}
            onClick={() => goToStep(parseInt(step))}
            className={
              "nav__item " +
              (customizeState === parseInt(step) ? "active" : "inactive")
            }
          >
            {customizeSteps[parseInt(step)]["step-name"]}
          </li>
        ))}
      </nav>
      <div className="displayContents">
        {customizeSteps[customizeState].element}
      </div>
    </div>
  );
}
