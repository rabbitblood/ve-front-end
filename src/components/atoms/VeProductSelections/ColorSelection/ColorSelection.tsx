import "./ColorSelection.css";

interface Props {
  product: VeProduct;
  currentColor: string;
  className?: string;
  setCurrentColor: (color: string) => void;
}

export default function ColorSelection(prop: Props) {
  return (
    <div className={`color-options ${prop.className}`}>
      {prop.product.options.colorOptions.map((color, idx) => {
        return (
          <div
            key={idx}
            className={
              "color-option" +
              (prop.currentColor === color.colorName ? " selected" : "")
            }
            style={{ backgroundColor: color.color }}
            onClick={() => {
              prop.setCurrentColor(color.colorName);
            }}
          ></div>
        );
      })}
    </div>
  );
}
