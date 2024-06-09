"use client";
import { FormButton } from "@/components/atoms/FormButton/FormButton";
import Banner, { SlideData } from "@/components/organisms/Banner/Banner";
import { getAllProductsAsVeProducts } from "@/lib/builderio/builderDataUtil";
import Link from "next/link";
import { useState, useEffect } from "react";
import { builder } from "@builder.io/sdk";
builder.init(process.env.NEXT_PUBLIC_BUILDER_PUBLIC_KEY ?? "");

export default function AllProductPageBanner() {
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
              <Link href={`/products/view/${product.productId}`}>
                <FormButton>Detail</FormButton>{" "}
              </Link>
            </div>
          ),
        };
      });

    setSlideData(slideData);
  }, [products]);
  return <Banner slideData={slideData}></Banner>;
}
