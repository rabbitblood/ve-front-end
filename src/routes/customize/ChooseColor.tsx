import { useRef } from "react";
import { colorProperty, chooseColorParam } from "./Customize";
import "@/css/customize/chooseColor.css";
import "@google/model-viewer/lib/model-viewer";

import wristBandModel from "@/assets/3d-model/wrist-bands.glb";

export default function ChooseColor(param: chooseColorParam) {
  //select color
  const { currentColor, setCurrentColor } = param;
  const chooseColorList: colorProperty[] = [
    {
      color1: "Black",
      color2: "Black",
    },
    {
      color1: "Black",
      color2: "Pink",
    },
    {
      color1: "Black",
      color2: "Red",
    },
    {
      color1: "Black",
      color2: "Blue",
    },
    {
      color1: "Black",
    },
  ];

  function colorToText(color: colorProperty) {
    return color.color2 ? `${color.color1}/${color.color2}` : color.color1;
  }

  //3d model
  const modelViewer = useRef(null);

  return (
    <div className="choose-color">
      <div className="model-view-container">
        <model-viewer
          ref={modelViewer}
          alt="test"
          class="model-view-3d"
          camera-controls
          touch-action="pan-y"
          src={wristBandModel}
          disable-zoom
          auto-rotate
        ></model-viewer>
        <div className="model-info">
          <p>Adjustable Length: 30-35 cm</p>
          <p>Thick: 2.5 mm</p>
          <p>Width: 2 cm</p>
        </div>
      </div>
      <div className="color-options">
        <div className="color-area">
          <div className="area-option">成品搭配</div>
          <div className="area-option">Front</div>
          <div className="area-option">Back</div>
        </div>
        <div className="choose-color">
          {chooseColorList.map((color, index) => {
            return (
              <div
                key={index}
                className="color"
                onClick={() => setCurrentColor(color)}
              >
                <div className="color-combination">{colorToText(color)}</div>
              </div>
            );
          })}
        </div>
        <div className="current-color">
          currentColor: {colorToText(currentColor)}
        </div>
        <div className="description">
          <p>Leather:</p>
          {currentColor && (
            <p>{currentColor.color1} - "Hermas Terillion Celemance"</p>
          )}
          {currentColor.color2 && <p>{currentColor.color2} - "Hermas Box"</p>}
          <p>Discription:</p>
          <p>
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </p>
          <p>Pictures:</p>
          <div className="images">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
