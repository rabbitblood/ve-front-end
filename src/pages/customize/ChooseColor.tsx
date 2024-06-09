// import { useState } from "react";
// import { colorProperty, chooseColorParam } from "./Customize";
// import "@/css/customize/chooseColor.css";
// import "@google/model-viewer/lib/model-viewer";

// //import wristBandModel from "@/assets/3d-model/wrist-bands.glb";
// import neckBand from "@/assets/neck-band.png";

// type selectionState = "set" | "front" | "back";

// export default function ChooseColor(param: chooseColorParam) {
//   //select color
//   const { currentColor, setCurrentColor } = param;
//   const [currentSelectionState, setCurrentSelectionState] =
//     useState<selectionState>("set");
//   const [currentAnimal, setCurrentAnimal] = useState<string>("");
//   const [currentSkin, setCurrentSkin] = useState<string>("");

//   const chooseColorList: colorProperty[] = [
//     {
//       color1: "Black",
//       color2: "Black",
//     },
//     {
//       color1: "Black",
//       color2: "Pink",
//     },
//     {
//       color1: "Black",
//       color2: "Red",
//     },
//     {
//       color1: "Black",
//       color2: "Blue",
//     },
//     {
//       color1: "purple",
//     },
//   ];

//   const selectionSkinOption = {
//     Cow: {
//       name: "Cow",
//       skin: {
//         "Terillion Celemace - Hermas": {
//           name: "Terillion Celemace - Hermas",
//           description: "xxxxxx",
//           productOrigin: "Italy",
//           patternImage: "",
//           colorOptions: ["red", "black", "red/black"],
//           productImages: [neckBand, neckBand, neckBand],
//         },
//         "TOGO - Hermas": {
//           name: "TOGO - Hermas",
//           description: "xxxxxx",
//           productOrigin: "Italy",
//           patternImage: "",
//           colorOptions: ["red", "black", "red/black"],
//           productImages: [neckBand, neckBand, neckBand],
//         },
//         "Box - Hermas": {
//           name: "Box - Hermas",
//           description: "xxxxxx",
//           productOrigin: "Italy",
//           patternImage: "",
//           colorOptions: ["red", "black", "red/black"],
//           productImages: [neckBand, neckBand, neckBand],
//         },
//       },
//     },
//     Sheep: {
//       name: "Sheep",
//       skin: {
//         "Terillion Celemace - Hermas": {
//           name: "Terillion Celemace - Hermas",
//           description: "xxxxxx",
//           productOrigin: "Italy",
//           patternImage: "",
//           colorOptions: ["red", "black", "red/black"],
//           productImages: [neckBand, neckBand, neckBand],
//         },
//       },
//     },
//     Ostrich: {
//       name: "Ostrich",
//       skin: {
//         "Terillion Celemace - Hermas": {
//           name: "Terillion Celemace - Hermas",
//           description: "xxxxxx",
//           productOrigin: "Italy",
//           patternImage: "",
//           colorOptions: ["red", "black", "red/black"],
//           productImages: [neckBand, neckBand, neckBand],
//         },
//       },
//     },
//   };

//   const setSelectionView = (
//     <div className="choose-color">
//       {chooseColorList.map((color, index) => {
//         return (
//           <div
//             key={index}
//             className="color"
//             onClick={() => setCurrentColor(color)}
//           >
//             <div className="color-display">
//               <div
//                 className="color1"
//                 style={{ backgroundColor: color.color1 }}
//               ></div>
//               {color.color2 ? (
//                 <div
//                   className="color2"
//                   style={{ backgroundColor: color.color2 }}
//                 ></div>
//               ) : (
//                 <div
//                   className="color2"
//                   style={{ backgroundColor: color.color1 }}
//                 ></div>
//               )}
//             </div>
//             <div className="color-combination">{colorToText(color)}</div>
//           </div>
//         );
//       })}
//     </div>
//   );

//   const diyView = (
//     <div className="diy-view">
//       <label htmlFor="animal" hidden>
//         Choose a skin:
//       </label>

//       <select
//         className="animal-select"
//         name="animal"
//         id="animal"
//         onChange={(event) => {
//           setCurrentAnimal(event.target.value);
//         }}
//       >
//         <option value="" defaultChecked>
//           please select a animal
//         </option>
//         {Object.keys(selectionSkinOption).map((skin, index) => {
//           return (
//             <option key={index} value={skin}>
//               {skin}
//             </option>
//           );
//         })}
//       </select>

//       {currentAnimal && (
//         <div>
//           <label htmlFor="skin" hidden>
//             Choose a skin:
//           </label>

//           <select
//             className="skin-select"
//             name="skin"
//             id="skin"
//             onChange={(event) => {
//               setCurrentSkin(event.target.value);
//             }}
//           >
//             <option value="" defaultChecked>
//               please select a skin
//             </option>
//             {Object.values(
//               selectionSkinOption[
//                 currentAnimal as keyof typeof selectionSkinOption
//               ].skin
//             ).map((skin, index) => {
//               console.log(skin);
//               return (
//                 <option key={index} value={skin.name}>
//                   {skin.name}
//                 </option>
//               );
//             })}
//           </select>
//         </div>
//       )}
//     </div>
//   );

//   const stateSelectionView = {
//     set: setSelectionView,
//     front: diyView,
//     back: diyView,
//   };

//   function colorToText(color: colorProperty) {
//     return color.color2 ? `${color.color1}/${color.color2}` : color.color1;
//   }

//   //3d model
//   //const modelViewer = useRef(null);

//   return (
//     <div className="choose-color">
//       <div className="display-section">
//         {/* <model-viewer
//           ref={modelViewer}
//           alt="3d model"
//           class="model-display"
//           camera-controls
//           touch-action="pan-y"
//           src={wristBandModel}
//           disable-zoom
//           auto-rotate
//         ></model-viewer> */}
//         <div className="model-info">
//           <p>Adjustable Length: 30-35 cm</p>
//           <p>Thick: 2.5 mm</p>
//           <p>Width: 2 cm</p>
//         </div>
//       </div>
//       <div className="selection-section">
//         <div className="color-area">
//           <div
//             className="area-option"
//             onClick={() => {
//               setCurrentSelectionState("set");
//             }}
//           >
//             成品搭配
//           </div>
//           <div
//             className="area-option"
//             onClick={() => {
//               setCurrentSelectionState("front");
//             }}
//           >
//             Front
//           </div>
//           <div
//             className="area-option"
//             onClick={() => {
//               setCurrentSelectionState("back");
//             }}
//           >
//             Back
//           </div>
//         </div>

//         {stateSelectionView[currentSelectionState]}

//         <h2 className="current-color">{currentAnimal}</h2>
//         <h2 className="current-color">{currentSkin}</h2>
//         <h2 className="current-color">{colorToText(currentColor)}</h2>
//         <div className="description">
//           <p>Leather:</p>
//           {currentColor && (
//             <p>
//               {currentColor.color1} -{" "}
//               <span className="color-desc">Hermas Terillion Celemance</span>
//             </p>
//           )}
//           {currentColor.color2 && (
//             <p>
//               {currentColor.color2} -{" "}
//               <span className="color-desc">Hermas Box</span>
//             </p>
//           )}
//           <p>Discription:</p>
//           <p>
//             xxxxxxxxxxxxxxxxxxxxxxxxxxx
//             <br />
//             xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//             <br />
//             xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//           </p>
//           <p>Pictures:</p>
//           <div className="images">
//             <img className="image" src={neckBand.src} alt="" />
//             <img className="image" src={neckBand.src} alt="" />
//             <img className="image" src={neckBand.src} alt="" />
//             <img className="image" src={neckBand.src} alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
