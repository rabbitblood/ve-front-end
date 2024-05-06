import "./ComboSelection.css";
import { getProductById } from "@/lib/VeProduct/VeproductUtil";

interface Prop {
  product: VeProduct;
  currentCombo: string;
  setCurrentCombo: (combo: string) => void;
}

export default function ComboSelection(prop: Prop) {
  const { product, currentCombo, setCurrentCombo } = prop;
  return (
    <div className="combo-selection">
      <h2 className="combo-title">Combo with</h2>
      <select
        className="combo-options"
        onChange={(e) => {
          setCurrentCombo(e.target.value);
        }}
      >
        <option className="combo-option">Select Combo</option>
        {product.options.comboOptions.map((combo, idx) => {
          return (
            <option
              key={idx}
              className={
                "combo-option" +
                (currentCombo === getProductById(combo.comboProductId)?.name
                  ? " selected"
                  : "")
              }
              value={combo.comboProductId}
            >
              {getProductById(combo.comboProductId)?.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
