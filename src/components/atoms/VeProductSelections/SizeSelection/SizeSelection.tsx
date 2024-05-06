import "./SizeSelection.css";

interface Props {
  product: VeProduct;
  currentSize: string;
  setCurrentSize: (size: string) => void;
}

export default function SizeSelection(prop: Props) {
  return (
    <div className="size-option-container">
      <h2 className="select-text">Select Size: </h2>
      <select
        className="size-options"
        onChange={(e) => {
          prop.setCurrentSize(e.target.value);
        }}
      >
        {prop.product.options.sizeOptions.map((size, idx) => {
          return (
            <option
              key={idx}
              className={
                "size-option" +
                (prop.currentSize === size.sizeName ? " selected" : "")
              }
            >
              {size.sizeName}
            </option>
          );
        })}
      </select>
    </div>
  );
}
