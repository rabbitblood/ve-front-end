import BasicLayout from "@/components/layout/BasicLayout/BasicLayout";
import { useParams } from "react-router-dom";
import "./ProductType.css";

import Banner from "@/components/organisms/Banner/Banner";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/lib/redux/reduxDispatcher";
import { setNav } from "@/lib/redux/store/navSlice";
import ProductCard from "@/components/atoms/ProductCard/ProductCard";
import ProductTypeDescriptionSectionV2 from "@/components/organisms/ProductTypeDescriptionSection/ProductTypeDescriptionSectionV2/ProductTypeDescriptionSectionV2";

import {
  getAllProductsAsVeProducts,
  getDataByName,
} from "@/lib/builderio/builderDataUtil";
import { SeriesInfoEntity, VeAllTypeInfo } from "@/types/builderio";
import CardContainer from "@/components/layout/CardContainerLayout/CardContainerLayout";

import ToElementArrow from "@/components/atoms/ToElementArrow/ToElementArrow";
import { StringToUppercasedFirstLetterParagraphElement } from "@/lib/util/paragraphUtil";

export default function ProductType() {
  //get param
  const { type, series } = useParams<{ type: string; series: string }>();
  const dispatch = useAppDispatch();
  const [products, setProducts] = useState<VeProduct[]>([]);

  //const [typeInfo, setTypeInfo] = useState<VeAllTypeInfo>();
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

  const slideData = currentSeriesInfo?.seriesFeatureImages?.map((image) => ({
    original: image.image,
    thumbnail: image.image,
    displayElement: (
      <div className="banner-text-container">
        <h2 className="title">{series !== "None" ? series : ""}</h2>
      </div>
    ),
  }));

  return (
    <BasicLayout>
      <div className="product-type-page">
        <Banner slideData={slideData} />
        <div id="products-section" className="products-section">
          <ToElementArrow toElementId="desc" buttonText="To Feature" />
          <h2 className="section-name">
            {series !== "None" ? `${series} Series` : ""} {type}
          </h2>{" "}
          {currentSeriesInfo && (
            <StringToUppercasedFirstLetterParagraphElement
              str={currentSeriesInfo?.serieShortDescription as string}
              spanClassName="first-letter"
              elementClassName="paragraph text"
            />
          )}
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
