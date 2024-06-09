import { useState, Dispatch, SetStateAction } from "react";
import Link from "next/link";
import "@/css/customize/customize.css";

//display components
import ChooseColor from "./ChooseColor";
import ChooseDecoration from "./ChooseDecoration";
import ChooseEngraving from "./ChooseEngraving";

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
      element: <ChooseDecoration />,
    },
    3: {
      "step-name": "engraving",
      element: <ChooseEngraving />,
    },
    4: {
      "step-name": "review",
      element: <>review</>,
    },
  };

  function goToStep(step: number) {
    setCustomizeState(step);
  }

  function getClientWidth() {
    return window.innerWidth;
  }

  return (
    <div className="customize">
      <Link href={"/"} className="brand-name">
        <h2>Vé</h2>
      </Link>
      <nav className="customize-step-nav">
        {Object.keys(customizeSteps).map((step, index) => (
          <li
            key={index}
            onClick={() => goToStep(parseInt(step))}
            className={
              "nav__item " +
              (customizeState === parseInt(step) ? "current-step" : "") +
              (Math.abs(index + 1 - customizeState) > 1 ? " transparent" : "")
            }
            style={{
              left: (index + 1 - customizeState) * 150 + getClientWidth() / 2,
            }}
          >
            {customizeSteps[parseInt(step)]["step-name"]}
          </li>
        ))}
      </nav>
      <div className="nav">
        <div>Categories</div>
        <div>About Us</div>
        <div>Contact Us</div>
      </div>
      <div className="displayContents">
        {customizeSteps[customizeState].element}
      </div>
    </div>
  );
}
