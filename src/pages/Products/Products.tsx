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
import DocumentMeta from "react-document-meta";
import {
  generalDescriptionMetaData,
  generalKeywordsMetaData,
  generalTitleMetaData,
} from "@/data/SEOData";

export default function Products() {
  const [products, setProducts] = useState<VeProduct[]>([]);
  const [slideData, setSlideData] = useState<SlideData[]>();

  useEffect(() => {
    getAllProductsAsVeProducts().then((data) => {
      console.log(data);
      //generate sitemap for /products/view/:productid

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

    // console.log(
    //   `
    //   ${products
    //     .map((product) => {
    //       return `
    //       <url>
    //         <loc>
    //           ${`https://vestudio.ca/products/view/${product.productId}`}
    //         </loc>
    //         <lastmod>${new Date().toISOString()}</lastmod>
    //       </url>
    //       `;
    //     })
    //     .join("")}
    //   `
    // );
  }, [products]);

  // meta data
  const meta = {
    title: `All Products | ${generalTitleMetaData}`,
    description: `Vé All Products. ${generalDescriptionMetaData}`,
    meta: {
      charset: "utf-8",
      name: {
        keywords: `All Products, products, catagories ${generalKeywordsMetaData}`,
      },
    },
  };

  return (
    <DocumentMeta {...meta}>
      <BasicLayout>
        {products && (
          <div className="product-type-page products-page">
            <Banner slideData={slideData}></Banner>
            <h1 className="page-title">All Products</h1>
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
    </DocumentMeta>
  );
}
