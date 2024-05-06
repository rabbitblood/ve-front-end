import { Link } from "react-router-dom";
import "./ProductCard.css";

interface ProductCardProps {
  product: VeProduct;
  idx: number;
}

export default function ProductCard({ product, idx }: ProductCardProps) {
  return (
    <Link to={`/products/view/${product.productId}`} key={idx}>
      <div key={idx} className="product-card">
        <img className="product-image" src={product.images[0]} alt="" />
        <div className="color-options">
          {product.options.colorOptions.map((color, idx) => {
            return (
              <div
                key={idx}
                className={"color-option"}
                style={{ backgroundColor: color.color }}
              ></div>
            );
          })}
        </div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-base">{product.series.SerieName}</p>
        <p className="product-desc">{product.description}</p>
        <p className="product-price">{product.price}</p>
      </div>
    </Link>
  );
}
