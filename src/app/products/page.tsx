import "./Products.css";
import BasicLayout from "@/components/page/BasicLayout/BasicLayout";
import ProductCard from "@/components/atoms/ProductCard/ProductCard";
import { getAllProductsAsVeProducts } from "@/lib/builderio/builderDataUtil";
import { Key } from "react";
import CardContainer from "@/components/layout/CardContainerLayout/CardContainerLayout";
import {
  generalDescriptionMetaData,
  generalKeywordsMetaData,
  generalTitleMetaData,
} from "@/data/SEOData";
import { Metadata } from "next";
import AllProductPageBanner from "@/components/layout/AllProductPageBanner/AllProductPageBanner";
import AllProductsProductCardsSection from "@/components/layout/AllProductsProductCardsSection/AllProductsProductCardsSection";

export const metadata: Metadata = {
  title: `${generalTitleMetaData} | All Products`,
  description: `Vé All Products. ${generalDescriptionMetaData}`,
  keywords: `All Products, products, catagories ${generalKeywordsMetaData}`,
};

export default async function Products() {
  return (
    <BasicLayout>
      <div className="product-type-page products-page">
        <AllProductPageBanner />
        <h1 className="page-title">All Products</h1>{" "}
        <div id="products-section" className="products-section">
          <AllProductsProductCardsSection />
        </div>
      </div>
    </BasicLayout>
  );
}
