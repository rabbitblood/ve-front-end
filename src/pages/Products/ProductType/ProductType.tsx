import BasicLayout from "@/components/layout/BasicLayout/BasicLayout";
import { useParams } from "react-router-dom";
import "./ProductType.css";

import Banner from "@/components/organisms/Banner/Banner";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "@/lib/redux/reduxDispatcher";
import { setNav } from "@/lib/redux/store/navSlice";
import ProductCard from "@/components/atoms/ProductCard/ProductCard";

import WholeBlock from "@/components/atoms/TextSections/WholeBlock";
import TextWithImage from "@/components/atoms/TextSections/TextWithImage";

import arrowIcon from "@/assets/icons/arrow.svg";

import {
  getAllProductsAsVeProducts,
  getDataByName,
} from "@/lib/builderio/builderDataUtil";
import { SeriesInfoEntity, TypeInfo, VeAllTypeInfo } from "@/types/builderio";
import CardContainer from "@/components/layout/CardContainerLayout/CardContainerLayout";

export default function ProductType() {
  //get param
  const { type, series } = useParams<{ type: string; series: string }>();
  const dispatch = useAppDispatch();
  const descArea = useRef<HTMLDivElement>(null);
  const [products, setProducts] = useState<VeProduct[]>([]);

  //const [typeInfo, setTypeInfo] = useState<VeAllTypeInfo>();
  const [currentTypeInfo, setCurrentTypeInfo] = useState<TypeInfo>();
  const [currentSeriesInfo, setCurrentSeriesInfo] =
    useState<SeriesInfoEntity>();

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
      setCurrentTypeInfo(currentType);

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
            name: (series !== "None" ? series : type) as string,
            url: `/products/${type}/${series}`,
          },
        ],
      })
    );
  }, [type, series, dispatch]);

  function scrollToProducts() {
    const element = document.getElementById("products-section");
    element?.scrollIntoView({ behavior: "smooth" });
  }

  const slideData = currentSeriesInfo?.seriesFeatureImages?.map((image) => ({
    original: image.image,
    thumbnail: image.image,
    displayElement: (
      <div className="banner-text-container">
        <h2 className="title">{series !== "None" ? series : ""}</h2>
      </div>
    ),
  }));

  const descData =
    currentSeriesInfo?.descriptionPageSections?.map((section) => {
      if (!section || !section.textSections) {
        return null;
      }
      if (section.textSections.secionType === "WholeSection") {
        return {
          type: "WholeSection",
          title: section.textSections.title,
          text: section.textSections.paragraph,
          image: section.textSections.image,
        };
      } else {
        return {
          type: "TextWithImage",
          title: section.textSections.title,
          text: section.textSections.paragraph,
          image: section.textSections.image,
          textRight: section.textSections.swapTextAndImagePosition,
        };
      }
    }) ?? [];

  return (
    <BasicLayout>
      <div className="product-type-page">
        <Banner slideData={slideData} />
        <div ref={descArea} id="desc" className="product-type-desc">
          <img
            src={arrowIcon}
            className="to-products-button"
            onClick={scrollToProducts}
          />
          <div
            style={{ textAlign: "center", maxWidth: "800px", margin: "auto" }}
          >
            <h1>
              {currentSeriesInfo?.series.seriesName !== "None" &&
                currentSeriesInfo?.series.seriesName + " series "}
              {currentTypeInfo?.type.typeName}
            </h1>
            <p>{currentSeriesInfo?.serieShortDescription}</p>
          </div>
          {descData.map((data, idx) => {
            if (!data) {
              return null;
            }
            if (data.type === "WholeSection") {
              return (
                <WholeBlock
                  key={idx}
                  title={data.title}
                  text={data.text}
                  image={data.image}
                  parentRef={descArea}
                />
              );
            } else {
              return (
                <TextWithImage
                  key={idx}
                  title={data.title}
                  text={data.text}
                  image={data.image}
                  textRight={data.textRight}
                  parentRef={descArea}
                />
              );
            }
          })}
        </div>
        <div id="products-section" className="products-section">
          <h2 className="section-name">
            {series !== "None" ? `${series} Series` : ""} {type}
          </h2>
          <CardContainer>
            {products &&
              type &&
              series &&
              products
                .filter((value) => {
                  return (
                    value.type.typeName.toLowerCase() === type.toLowerCase() &&
                    value.series.SerieName.toLowerCase() ===
                      series.toLowerCase()
                  );
                })
                .map((product, idx) => {
                  return <ProductCard key={idx} product={product} />;
                })}
          </CardContainer>
        </div>
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
