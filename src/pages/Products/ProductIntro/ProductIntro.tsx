import { useParams } from "react-router-dom";
import BasicLayout from "@/components/layout/BasicLayout/BasicLayout";
import IntroSection from "@/components/organisms/IntroSection/IntroSection";
import { useCallback, useEffect, useRef, useState } from "react";
import { useAppDispatch } from "@/lib/redux/reduxDispatcher";
import { setNav } from "@/lib/redux/store/navSlice";
import { getDataByName } from "@/lib/builderio/builderDataUtil";
import { VeAllTypeInfo } from "@/types/builderio";
import { HorizontalMoveImageViewerRef } from "@/components/atoms/HorizontalMoveImageViewer/HorizontalMoveImageViewer";

export default function ProductIntro() {
  //get param
  const { type } = useParams<{ type: string }>();
  const [serie, setSerie] = useState<VeProductSeries>({
    SerieName: "classic",
    type: { typeName: type as string },
  });
  const dispatch = useAppDispatch();
  const [typeInfo, setTypeInfo] = useState<VeAllTypeInfo>();
  const [seriesDisplay, setSeriesDisplay] =
    useState<{ seriesName: string; description: string; image: string }[]>();

  const imageGallery = useRef<HorizontalMoveImageViewerRef>(null);

  const changeSerieHandler = useCallback(
    (index: number) => {
      if (!seriesDisplay || !seriesDisplay[index]) return;
      setSerie({
        type: { typeName: type as string },
        SerieName: seriesDisplay[index].seriesName,
      });
    },
    [seriesDisplay, type]
  );

  useEffect(() => {
    if (imageGallery.current?.current) {
      imageGallery.current.current.backToInitialPosition();
    }
  }, [type]);

  useEffect(() => {
    getDataByName("all-product-type-info").then((data) => {
      setTypeInfo(data);
      changeSerieHandler(0);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    changeSerieHandler(0);
  }, [changeSerieHandler, seriesDisplay]);

  useEffect(() => {
    if (!typeInfo || !type) return;

    const display =
      typeInfo.typeInfos
        ?.find(
          (typeInfo) =>
            typeInfo.typeInfo.type.typeName.toLowerCase() ===
            type?.toLowerCase()
        )
        ?.typeInfo.seriesInfo?.map((seriesInfo) => ({
          seriesName: seriesInfo.series.seriesName,
          description: seriesInfo.serieShortDescription,
          image: seriesInfo.seriesFeatureImages?.[0].image ?? "",
        })) ?? [];

    setSeriesDisplay(display);
  }, [type, typeInfo]);

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

  return (
    <BasicLayout>
      {typeInfo && seriesDisplay && (
        <IntroSection
          ref={imageGallery}
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
      )}
    </BasicLayout>
  );
}
