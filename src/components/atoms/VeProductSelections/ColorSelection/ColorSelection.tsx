import "./ColorSelection.css";

interface Props {
  product: VeProduct;
  currentColor: string;
  setCurrentColor: (color: string) => void;
}

export default function ColorSelection(prop: Props) {
  return (
    <div className="color-options">
      {prop.product.options.colorOptions.map((color, idx) => {
        return (
          <div
            key={idx}
            className={
              "color-option" +
              (prop.currentColor === color.color ? " selected" : "")
            }
            style={{ backgroundColor: color.color }}
            onClick={() => {
              prop.setCurrentColor(color.color);
            }}
          ></div>
        );
      })}
    </div>
  );
}
