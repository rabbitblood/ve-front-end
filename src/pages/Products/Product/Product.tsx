import { useParams } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import "@/pages/Products/Products.css";
import "./product.css";
import { FormButton } from "@/components/atoms/FormButton/FormButton";
import HorizontalMoveImageViewer from "@/components/atoms/HorizontalMoveImageViewer/HorizontalMoveImageViewer";
import { useAppDispatch } from "@/lib/redux/reduxDispatcher";
import { addItemToCart } from "@/lib/redux/store/cartSlice";

import BasicLayout from "@/components/layout/BasicLayout/BasicLayout";
import { useCallback, useEffect, useRef, useState } from "react";
import { setNav } from "@/lib/redux/store/navSlice";
import ColorSelection from "@/components/atoms/VeProductSelections/ColorSelection/ColorSelection";
import SizeSelection from "@/components/atoms/VeProductSelections/SizeSelection/SizeSelection";
import ComboSelection from "@/components/atoms/VeProductSelections/ComboSelection/ComboSelection";
import {
  getProductById,
  getSimmilarProducts,
} from "@/lib/VeProduct/VeproductUtil";
import { getAllProductsAsVeProducts } from "@/lib/builderio/builderDataUtil";
// import { openPopUp } from "@/lib/redux/store/popUpSlice";
import { HorizontalMoveImageViewerRef } from "@/components/atoms/HorizontalMoveImageViewer/HorizontalMoveImageViewer";
import ProductCard from "@/components/atoms/ProductCard/ProductCard";
import arrowImage from "@/assets/icons/arrow.svg";

export default function Product() {
  const [product, setProduct] = useState<VeProduct>();
  const { productid } = useParams<{ productid: string }>();
  const [currentColor, setCurrentColor] = useState<string>("");
  const [currentSize, setCurrentSize] = useState<string>("");
  const [currentCombo, setCurrentCombo] = useState<string | null>(null);
  const [calculatedPrice, setCalculatedPrice] = useState<number>(0);
  const [simmilarProducts, setSimmilarProducts] = useState<VeProduct[]>([]);
  const imageGallery = useRef<HorizontalMoveImageViewerRef>(null);
  const dispatch = useAppDispatch();

  console.log(product);
  useEffect(() => {
    product &&
      getSimmilarProducts(product).then((data) => {
        setSimmilarProducts(data);
      });
  }, [product]);

  const getCalculatedPrice = useCallback(async () => {
    let price = product?.price ?? 0;

    const colorOption = product?.options.colorOptions.find(
      (color) => color.color === currentColor
    );

    const sizeOption = product?.options.sizeOptions.find(
      (size) => size.sizeName === currentSize
    );

    if (colorOption && colorOption.additionalPrice) {
      price += colorOption.additionalPrice;
    }
    if (sizeOption && sizeOption.additionalPrice) {
      price += sizeOption.additionalPrice;
    }
    if (currentCombo) {
      price += ((await getProductById(currentCombo)) as VeProduct)?.price ?? 0;
    }

    return price;
  }, [product, currentColor, currentSize, currentCombo]);

  useEffect(() => {
    getAllProductsAsVeProducts().then((data) => {
      const product: VeProduct = data.find(
        (product: VeProduct) => product.productId === productid
      );
      setProduct(product);

      product.options.colorOptions.length > 0
        ? setCurrentColor(product.options.colorOptions[0].colorName)
        : "";

      product.options.sizeOptions.length > 0
        ? setCurrentSize(product.options.sizeOptions[0].sizeName)
        : "";
    });
  }, [productid]);

  useEffect(() => {
    getCalculatedPrice().then((price) => {
      setCalculatedPrice(price);
    });
  }, [getCalculatedPrice, product]);

  useEffect(() => {
    dispatch(
      setNav({
        nav: [
          { name: "Home", url: "/" },
          {
            name: product?.type.typeName as string,
            url: `/products/ProductIntro/${product?.type.typeName}`,
          },
          {
            name: (product?.series.SerieName !== "None"
              ? product?.series.SerieName
              : product?.type.typeName) as string,
            url: `/products/${product?.type.typeName}/${product?.series.SerieName}`,
          },
          {
            name: product?.name as string,
            url: `/products/view/${product?.productId}`,
          },
        ],
      })
    );
  }, [dispatch, product]);

  function addItemToCartHandler() {
    if (!product) return;

    dispatch(
      addItemToCart({
        productId: product?.productId,
        amount: 1,
        productName: product?.name,
        productDesc: product?.description,
        price: calculatedPrice,
        imageUrl: product?.images[0],
        color: currentColor,
        size: currentSize,
        comboId: currentCombo ?? "",
      })
    );
  }

  function getImageToDisplay(): string[] {
    imageGallery.current?.current?.backToInitialPosition();
    if (product?.options.colorOptions?.length ?? 0 > 0) {
      const colorOption = product?.options.colorOptions.find(
        (color) => color.colorName === currentColor
      );
      if (colorOption && colorOption.images) {
        return colorOption.images;
      }
    }

    if (product) {
      return product.images;
    } else {
      return [];
    }
  }

  return (
    <BasicLayout>
      {
        <>
          <div className="product-page">
            <div className="display">
              <HorizontalMoveImageViewer
                ref={imageGallery}
                images={getImageToDisplay()}
                showArrow={true}
              />{" "}
            </div>
            <div className="detail">
              <div className="info-container">
                <h2 className="title">{product?.name}</h2>
                <h3 className="sub-title">{product?.series.SerieName}</h3>
                {product &&
                  product.options.colorOptions &&
                  product.options.colorOptions.length > 0 && (
                    <ColorSelection
                      product={product as VeProduct}
                      currentColor={currentColor}
                      setCurrentColor={setCurrentColor}
                    />
                  )}
                {product &&
                  product.options.sizeOptions &&
                  product.options.sizeOptions.length > 0 && (
                    <SizeSelection
                      product={product as VeProduct}
                      currentSize={currentSize}
                      setCurrentSize={setCurrentSize}
                    />
                  )}
                {product &&
                  product.options.comboOptions &&
                  product.options.comboOptions.length > 0 && (
                    <ComboSelection
                      product={product as VeProduct}
                      currentCombo={currentCombo ?? ""}
                      setCurrentCombo={setCurrentCombo}
                    />
                  )}
                <p className="desc">{product?.description}</p>
              </div>
              <p className="price">${calculatedPrice} CAD</p>
              <div className="form-button-container">
                <FormButton
                  onClick={() => {
                    addItemToCartHandler();
                  }}
                >
                  Add to cart
                </FormButton>{" "}
                {product?.isPreorder && (
                  <p>Preorder. Approximately 30 days arrive</p>
                )}
              </div>
            </div>
            <a href="#product-additional-info-section">
              <img className="more-arrow" src={arrowImage} alt="" />
            </a>
          </div>
          <div
            id="product-additional-info-section"
            className="product-additional-info-section"
          >
            <div className="extra-images">
              {product?.images.map((image, idx) => {
                return (
                  <div className="extra-image-container" key={idx}>
                    <img
                      src={image}
                      alt={product?.name}
                      className="extra-image"
                    />
                  </div>
                );
              })}
            </div>
            <div className="simmilar-products">
              {simmilarProducts.length > 0 && (
                <>
                  <h2>people also bought:</h2>
                  <div className="sim-product-container">
                    {simmilarProducts.map((product, key) => (
                      <ProductCard key={key} product={product} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      }
    </BasicLayout>
  );
}
