import { Link } from "react-router-dom";
import "./ProductCard.css";
import { useCallback, useState } from "react";
import React from "react";
import ColorSelection from "@/components/atoms/VeProductSelections/ColorSelection/ColorSelection";
interface ProductCardProps extends React.HTMLAttributes<HTMLElement> {
  product: VeProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [currentColor, setCurrentColor] = useState<string | undefined>(
    product.options.colorOptions.length > 0
      ? product.options.colorOptions[0].colorName
      : undefined
  );
  const [hoverCard, setHoverCard] = useState<boolean>(false);

  const getProductName = useCallback(() => {
    if (product.options.colorOptions.length > 0) {
      return `${currentColor}`;
    }
    return product.name;
  }, [product.options.colorOptions.length, product.name, currentColor]);

  const getDisplayImage = useCallback(() => {
    if (currentColor) {
      const colorOption = product.options.colorOptions.find(
        (option) => option.colorName === currentColor
      );

      if (colorOption && colorOption.images?.length > 0) {
        return colorOption.images[
          hoverCard && colorOption.images?.length > 1 ? 1 : 0
        ];
      }
    }

    return product.images[hoverCard && product.images.length > 1 ? 1 : 0];
  }, [currentColor, hoverCard, product.images, product.options.colorOptions]);

  return (
    <div className="product-card">
      <Link
        className="product-image-container"
        to={`/products/view/${product.productId}`}
      >
        <img
          className="product-image"
          src={getDisplayImage()}
          alt=""
          onMouseEnter={() => setHoverCard(true)}
          onMouseLeave={() => setHoverCard(false)}
        />
      </Link>
      <div className="info">
        <ColorSelection
          className="color-select"
          product={product}
          currentColor={currentColor ?? ""}
          setCurrentColor={setCurrentColor}
        />
        <h3 className="product-name">{getProductName()}</h3>
        <p className="product-base">
          {product.series.SerieName !== "None"
            ? `${product.series.SerieName} series`
            : ""}
        </p>
        <p className="product-desc">{product.description}</p>
        <p className="product-price">{product.price} CAD</p>
      </div>
    </div>
  );
}
