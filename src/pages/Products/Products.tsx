//images
import "./ProductType/ProductType.css";
import "./Products.css";
import BasicLayout from "@/components/layout/BasicLayout/BasicLayout";
import ProductCard from "@/components/atoms/ProductCard/ProductCard";
import { getAllProductsAsVeProducts } from "@/lib/builderio/builderDataUtil";
import { useEffect, useState } from "react";
import CardContainer from "@/components/layout/CardContainerLayout/CardContainerLayout";
import Banner, { SlideData } from "@/components/organisms/Banner/Banner";
import { Link } from "react-router-dom";
import { FormButton } from "@/components/atoms/FormButton/FormButton";

export default function Products() {
  const [products, setProducts] = useState<VeProduct[]>([]);
  const [slideData, setSlideData] = useState<SlideData[]>();

  useEffect(() => {
    getAllProductsAsVeProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    const slideData: SlideData[] = products
      .filter((p) => {
        if (p.isFeaturedProduct == true) return p;
      })
      .map((product) => {
        return {
          original: product.images[0],
          thumbnail: product.images[0],
          displayElement: (
            <div className="banner-text-container">
              <h3 className="sub-title">{product.name}</h3>
              <h2 className="title">{product.description}</h2>
              <Link to={`/products/view/${product.productId}`}>
                <FormButton>Detail</FormButton>{" "}
              </Link>
            </div>
          ),
        };
      });

    setSlideData(slideData);
  }, [products]);

  return (
    <BasicLayout>
      {products && (
        <div className="product-type-page">
          <Banner slideData={slideData}></Banner>
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
