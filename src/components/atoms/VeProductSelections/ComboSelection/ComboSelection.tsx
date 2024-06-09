import { useEffect, useState } from "react";
import "./ComboSelection.css";
import { getProductById } from "@/lib/VeProduct/VeproductUtil";
import { useAppDispatch } from "@/lib/redux/reduxDispatcher";
import { openPopUp } from "@/lib/redux/store/popUpSlice";
import comboimage from "@/assets/comboimage.png";

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
  const dispatch = useAppDispatch();

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

  function popComboInfo() {
    dispatch(
      openPopUp({
        title: "What is Combo?",
        message: (
          <>
            <p>Design For More Possibilities</p>
            <img src={comboimage.src} alt="" />
          </>
        ),
        info: "normal",
      })
    );
  }

  return (
    <>
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
      <a className="combo-learn-more" onClick={popComboInfo}>
        Learn more about Combo
      </a>
    </>
  );
}
