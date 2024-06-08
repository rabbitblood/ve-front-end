//images
import "./ProductType/ProductType.css";
import "./Products.css";
import BasicLayout from "@/components/page/BasicLayout/BasicLayout";
import ProductCard from "@/components/atoms/ProductCard/ProductCard";
import { getAllProductsAsVeProducts } from "@/lib/builderio/builderDataUtil";
import { useEffect, useState } from "react";
import CardContainer from "@/components/layout/CardContainerLayout/CardContainerLayout";
import Banner, { SlideData } from "@/components/organisms/Banner/Banner";
import { Link } from "react-router-dom";
import { FormButton } from "@/components/atoms/FormButton/FormButton";
import {
  generalDescriptionMetaData,
  generalKeywordsMetaData,
  generalTitleMetaData,
} from "@/data/SEOData";
import AllProductPageBanner from "@/components/layout/AllProductPageBanner/AllProductPageBanner";

export default function Products() {
  getAllProductsAsVeProducts().then((data) => {
    products = data;
  });

  return (
    <BasicLayout>
      {products && (
        <div className="product-type-page products-page">
          <AllProductPageBanner />
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
  );
}
