// import "@/css/customize/chooseDecoration.css";
// import neckBand from "@/assets/neck-band.png";

// export default function ChooseDecoration() {
//   const decoList = [
//     {
//       name: "deco 1",
//       src: neckBand,
//       description:
//         "deco 1 description Lorem \
//         ipsum dolor sit amet consectetur adipisicin\
//         elit. Eligendi non mollitia facere hic facilis debitis!",
//     },
//     {
//       name: "deco 2",
//       src: neckBand,
//       description:
//         "deco 2 description Lorem \
//         ipsum dolor sit amet consectetur adipisicin\
//         elit. Eligendi non mollitia facere hic facilis debitis!",
//     },
//     {
//       name: "deco 3",
//       src: neckBand,
//       description:
//         "deco 3 description Lorem \
//         ipsum dolor sit amet consectetur adipisicin\
//         elit. Eligendi non mollitia facere hic facilis debitis!",
//     },
//   ];

//   return (
//     <div className="choose-deco">
//       <div className="display-section">
//         <div className="model-display"></div>
//         <div className="model-info">
//           <p>Adjustable Length: 30-35 cm</p>
//           <p>Thick: 2.5 mm</p>
//           <p>Width: 2 cm</p>
//         </div>
//       </div>
//       <div className="selection-section">
//         <div className="deco-options">
//           <div className="option">安装饰品</div>
//           <div className="option">外挂饰品</div>
//           <div className="option">牵引饰品</div>
//         </div>
//         <div className="choose-deco">
//           {decoList.map((deco, index) => {
//             return (
//               <div className="deco" key={index}>
//                 <img className="deco-img" src={deco.src.src} alt="deco" />
//                 <div>
//                   <p>{deco.name}</p>
//                   <p>{deco.description}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }
