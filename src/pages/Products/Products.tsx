//images
import "./ProductType/ProductType.css";
import "./Products.css";
import BasicLayout from "@/components/layout/BasicLayout/BasicLayout";
import ProductCard from "@/components/atoms/ProductCard/ProductCard";
import { getAllProductsAsVeProducts } from "@/lib/builderio/builderDataUtil";
import { useEffect, useState } from "react";
import CardContainer from "@/components/layout/CardContainerLayout/CardContainerLayout";

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
            <CardContainer>
              {products.map((product, idx) => {
                return <ProductCard key={idx} product={product} />;
              })}
            </CardContainer>
          </div>
        </div>
      )}
    </BasicLayout>
  );
}
