import "./ProductTypeDescriptionSectionV2.css";

import WholeBlock from "@/components/atoms/TextSections/WholeBlock";
import TextWithImage from "@/components/atoms/TextSections/TextWithImage";

import { useEffect, useRef, useState } from "react";
import { SeriesInfoEntity, VeAllTypeInfo } from "@/types/builderio";
import { getDataByName } from "@/lib/builderio/builderDataUtil";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type: string;
  series: string;
}

export default function ProductTypeDescriptionSectionV1(props: Props) {
  const descArea = useRef<HTMLDivElement>(null);
  const [currentSeriesInfo, setCurrentSeriesInfo] =
    useState<SeriesInfoEntity>();

  useEffect(() => {
    getDataByName("all-product-type-info").then((data) => {
      //setTypeInfo(data);

      const currentType = (data as VeAllTypeInfo).typeInfos?.find(
        (typeInfo) => {
          return (
            typeInfo.typeInfo.type.typeName.toLowerCase() ===
            props.type?.toLowerCase()
          );
        }
      )?.typeInfo;

      const currentSeries = currentType?.seriesInfo?.find((seriesInfo) => {
        return (
          seriesInfo.series.seriesName.toLowerCase() ===
          props.series?.toLowerCase()
        );
      });
      setCurrentSeriesInfo(currentSeries);
    });
  }, [props.series, props.type]);

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
  console.log("ProductTypeDescriptionSectionV1 props: ", descData);

  return (
    <div ref={descArea} id="desc" className="product-type-desc" {...props}>
      <div>
        <h1 className="desc-title">Features</h1>
      </div>
      <div>
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
    </div>
  );
}
