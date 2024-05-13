import { useParams } from "react-router-dom";
import BasicLayout from "@/components/layout/BasicLayout/BasicLayout";
import IntroSection from "@/components/organisms/IntroSection/IntroSection";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/lib/redux/reduxDispatcher";
import { setNav } from "@/lib/redux/store/navSlice";
import { getDataByName } from "@/lib/builderio/builderDataUtil";
import { VeAllTypeInfo } from "@/types/builderio";

export default function ProductIntro() {
  //get param
  const { type } = useParams<{ type: string }>();
  const [serie, setSerie] = useState<VeProductSeries>({
    SerieName: "classic",
    type: { typeName: type as string },
  });
  const dispatch = useAppDispatch();
  const [typeInfo, setTypeInfo] = useState<VeAllTypeInfo>();

  useEffect(() => {
    getDataByName("all-product-type-info").then((data) => {
      setTypeInfo(data);
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
        ],
      })
    );
  }, [dispatch, type]);

  const changeSerieHandler = (index: number) => {
    setSerie({ ...serie, SerieName: seriesDisplay[index].seriesName });
  };

  const seriesDisplay =
    typeInfo?.typeInfos
      ?.find(
        (typeInfo) =>
          typeInfo.typeInfo.type.typeName.toLowerCase() === type?.toLowerCase()
      )
      ?.typeInfo.seriesInfo?.map((seriesInfo) => ({
        seriesName: seriesInfo.series.seriesName,
        description: seriesInfo.serieShortDescription,
        image: seriesInfo.seriesFeatureImages?.[0].image ?? "",
      })) ?? [];

  return (
    <BasicLayout>
      <IntroSection
        title={serie ? serie.SerieName : ""}
        subTitle="series"
        images={seriesDisplay.map((serie) => serie.image)}
        description={
          seriesDisplay.find(
            (serieDisplay) => serieDisplay.seriesName === serie.SerieName
          )?.description ?? "No description available"
        }
        exploreUrl={`/products/${type}/${serie.SerieName}`}
        onImageChange={(index) => changeSerieHandler(index)}
      />
    </BasicLayout>
  );
}
