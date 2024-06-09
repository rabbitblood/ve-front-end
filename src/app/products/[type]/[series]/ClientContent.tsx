"use client";
import BasicLayout from "@/components/page/BasicLayout/BasicLayout";
import "./ProductType.css";

import Banner from "@/components/organisms/Banner/Banner";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/lib/redux/reduxDispatcher";
import { setNav } from "@/lib/redux/store/navSlice";
import ProductCard from "@/components/atoms/ProductCard/ProductCard";
import ProductTypeDescriptionSectionV2 from "@/components/organisms/ProductTypeDescriptionSection/ProductTypeDescriptionSectionV2/ProductTypeDescriptionSectionV2";
import { motion } from "framer-motion";
import {
  getAllProductsAsVeProducts,
  getDataByName,
} from "@/lib/builderio/builderDataUtil";
import { SeriesInfoEntity, VeAllTypeInfo } from "@/types/builderio";
import CardContainer from "@/components/layout/CardContainerLayout/CardContainerLayout";

import ToElementArrow from "@/components/atoms/ToElementArrow/ToElementArrow";
import { StringToUppercasedFirstLetterParagraphElement } from "@/lib/util/paragraphUtil";

import { useIsMobile } from "@/hooks/pageUtil";

import { builder } from "@builder.io/sdk";
builder.init(process.env.NEXT_PUBLIC_BUILDER_PUBLIC_KEY ?? "");

interface Prop {
  params: {
    type: string;
    series: string;
  };
}

export default function ProductType({ params }: Prop) {
  const isMobile = useIsMobile();
  const { type, series } = params;
  const dispatch = useAppDispatch();
  const [products, setProducts] = useState<VeProduct[]>([]);
  //const [typeInfo, setTypeInfo] = useState<VeAllTypeInfo>();
  const [currentSeriesInfo, setCurrentSeriesInfo] =
    useState<SeriesInfoEntity>();

  //framer animations
  const descSectionAnimationVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  useEffect(() => {
    getDataByName("all-product-type-info").then((data) => {
      //setTypeInfo(data);

      const currentType = (data as VeAllTypeInfo).typeInfos?.find(
        (typeInfo) => {
          return (
            typeInfo.typeInfo.type.typeName.toLowerCase() ===
            type?.toLowerCase()
          );
        }
      )?.typeInfo;

      const currentSeries = currentType?.seriesInfo?.find((seriesInfo) => {
        return (
          seriesInfo.series.seriesName.toLowerCase() === series?.toLowerCase()
        );
      });
      setCurrentSeriesInfo(currentSeries);
    });
  }, [series, type]);

  useEffect(() => {
    getAllProductsAsVeProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    dispatch(
      setNav({
        nav: [
          { name: "Home", url: "/" },
          {
            name: type as string,
            url: `/products/ProductIntro/${type}`,
          },
          {
            name: (series !== "None" ? `The ${series} Series` : type) as string,
            url: `/products/${type}/${series}`,
          },
        ],
      })
    );
  }, [type, series, dispatch]);

  const slideData = currentSeriesInfo?.seriesFeatureImages?.map((image) => ({
    original: image.image,
    thumbnail: image.image,
    // displayElement: (
    //   <div className="banner-text-container">
    //     <h2 className="title">{series !== "None" ? series : ""}</h2>
    //   </div>
    // ),
  }));

  return (
    <BasicLayout>
      <div className="product-type-page">
        <Banner slideData={slideData} />
        <motion.div
          className="section-desc"
          variants={descSectionAnimationVariant}
          initial="hidden"
          whileInView={descSectionAnimationVariant.visible}
        >
          <h2 className="section-name">
            {series !== "None"
              ? `The ${series} Series`
              : type?.toUpperCase() ?? ""}
          </h2>{" "}
          <div className="section-desc-text">
            {currentSeriesInfo && (
              <StringToUppercasedFirstLetterParagraphElement
                str={currentSeriesInfo?.serieShortDescription as string}
                spanClassName="first-letter"
                elementClassName="paragraph text"
              />
            )}
          </div>
        </motion.div>{" "}
        <div className="section-before-feature">
          {" "}
          <ToElementArrow
            horizontalPosition={isMobile ? "h-center" : "right"}
            verticalPosition={isMobile ? "bottom" : "top"}
            toElementId="desc"
            buttonText="To Feature"
          />
          <div id="products-section" className="products-section">
            {" "}
            <CardContainer>
              {products &&
                type &&
                series &&
                products
                  .filter((value) => {
                    return (
                      value.type.typeName.toLowerCase() ===
                        type.toLowerCase() &&
                      value.series.SerieName.toLowerCase() ===
                        series.toLowerCase()
                    );
                  })
                  .map((product, idx) => {
                    return <ProductCard key={idx} product={product} />;
                  })}
            </CardContainer>
          </div>
          <div className="middle-banner-container">
            <video
              controls={isMobile}
              autoPlay
              muted
              loop
              playsInline
              webkit-playsinline="true"
              x-webkit-airplay="true"
              x5-video-player-type="h5"
              x5-video-player-fullscreen="true"
              x5-video-orientation="portrait"
              className="middle-banner"
              src={currentSeriesInfo?.middleBannerShow}
              poster={currentSeriesInfo?.middleBannerShow}
            ></video>
          </div>
        </div>
        <ProductTypeDescriptionSectionV2
          type={type as string}
          series={series as string}
        />
        {/* <div className="customize-cta">
          <p>
            HAVE SOME CUSTOMIZE DESIGN IDEA WITH THIS SERIES ? <br />
            CONTACT US THROUGH INSTAGRAM OR EMAIL
          </p>
        </div> */}
      </div>
    </BasicLayout>
  );
}
