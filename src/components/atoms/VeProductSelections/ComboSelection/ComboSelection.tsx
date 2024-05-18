import { useEffect, useState } from "react";
import "./ComboSelection.css";
import { getProductById } from "@/lib/VeProduct/VeproductUtil";

interface Prop {
  product: VeProduct;
  currentCombo: string;
  setCurrentCombo: (combo: string) => void;
}

export default function ComboSelection(prop: Prop) {
  const { product, currentCombo, setCurrentCombo } = prop;
  const [comboOptionProducts, setComboOptionsProducts] = useState<VeProduct[]>(
    []
  );

  useEffect(() => {
    async function getComboOptionProducts() {
      const cp = product.options.comboOptions.map(async (combo) => {
        return await getProductById(combo.comboProductId);
      });

      return Promise.all(cp);
    }
    getComboOptionProducts().then((cp) => {
      setComboOptionsProducts(cp as VeProduct[]);
    });
  }, [product]);

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
        {comboOptionProducts &&
          comboOptionProducts.map((combo, idx) => {
            return (
              <option
                key={idx}
                className={
                  "combo-option" +
                  (currentCombo === combo.name ? " selected" : "")
                }
                value={combo.productId}
              >
                {combo.name}
              </option>
            );
          })}
      </select>
    </div>
  );
}
