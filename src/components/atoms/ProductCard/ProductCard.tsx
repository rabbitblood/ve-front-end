import { Link } from "react-router-dom";
import "./ProductCard.css";
import { useState } from "react";
import React from "react";
import ColorSelection from "@/components/atoms/VeProductSelections/ColorSelection/ColorSelection";
interface ProductCardProps extends React.HTMLAttributes<HTMLElement> {
  product: VeProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [currentColor, setCurrentColor] = useState<string>(
    product.options.colorOptions.length > 0
      ? product.options.colorOptions[0].color
      : ""
  );

  return (
    <div className="product-card">
      <Link to={`/products/view/${product.productId}`}>
        <img className="product-image" src={product.images[0]} alt="" />
      </Link>
      <ColorSelection
        product={product}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-base">{product.series.SerieName}</p>
      <p className="product-desc">{product.description}</p>
      <p className="product-price">{product.price}$</p>
    </div>
  );
}
