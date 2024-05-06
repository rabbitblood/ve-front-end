import { Link } from "react-router-dom";
import "./ProductCard.css";

interface ProductCardProps extends React.HTMLAttributes<HTMLElement> {
  product: VeProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/products/view/${product.productId}`}>
      <div className="product-card">
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
