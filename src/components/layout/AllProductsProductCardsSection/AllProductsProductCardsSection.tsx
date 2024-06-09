"use client";
import ProductCard from "@/components/atoms/ProductCard/ProductCard";
import { Key, useEffect, useState } from "react";
import CardContainer from "../CardContainerLayout/CardContainerLayout";
import { getAllProductsAsVeProducts } from "@/lib/builderio/builderDataUtil";
import { builder } from "@builder.io/sdk";
builder.init(process.env.NEXT_PUBLIC_BUILDER_PUBLIC_KEY ?? "");

export default function AllProductsProductCardsSection() {
  const [products, setProducts] = useState<VeProduct[]>([]);

  useEffect(() => {
    getAllProductsAsVeProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <CardContainer>
      {products.map((product: VeProduct, idx: Key | null | undefined) => {
        return <ProductCard key={idx} product={product} />;
      })}
    </CardContainer>
  );
}
