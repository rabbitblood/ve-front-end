//images
import "./ProductType/ProductType.css";
import "./Products.css";
import BasicLayout from "@/components/layout/BasicLayout/BasicLayout";
import ProductCard from "@/components/atoms/ProductCard/ProductCard";
import { getAllProductsAsVeProducts } from "@/lib/builderio/builderDataUtil";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState<VeProduct[]>([]);

  useEffect(() => {
    getAllProductsAsVeProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <BasicLayout>
      {products && (
        <div className="product-type-page">
          <div id="products-section" className="products-section">
            <div className="products-container">
              <div className="products">
                {products.map((product, idx) => {
                  return <ProductCard key={idx} product={product} />;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </BasicLayout>
  );
}
