import { useParams, useSearchParams } from "react-router-dom";
import BasicLayout from "@/components/layout/BasicLayout/BasicLayout";
import IntroSection from "@/components/organisms/IntroSection/IntroSection";
import { useCallback, useEffect, useRef, useState } from "react";
import { useAppDispatch } from "@/lib/redux/reduxDispatcher";
import { setNav } from "@/lib/redux/store/navSlice";
import { getDataByName } from "@/lib/builderio/builderDataUtil";
import { VeAllTypeInfo } from "@/types/builderio";
import { HorizontalMoveImageViewerRef } from "@/components/atoms/HorizontalMoveImageViewer/HorizontalMoveImageViewer";

export default function ProductIntro() {
  //get url param
  const [searchParams] = useSearchParams();

  const { type } = useParams<{ type: string }>();
  const [serie, setSerie] = useState<VeProductSeries>({
    SerieName: "",
    type: { typeName: type as string },
  });
  const dispatch = useAppDispatch();
  const [typeInfo, setTypeInfo] = useState<VeAllTypeInfo>();
  const [seriesDisplay, setSeriesDisplay] =
    useState<{ seriesName: string; description: string; image: string }[]>();
  const imageGallery = useRef<HorizontalMoveImageViewerRef>(null);

  //usecallbacks
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
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    //check if the serie is in the seriesDisplay,
    //timeout to wait for the initial render of the component
    setTimeout(() => {
      if (!seriesDisplay) return;
      if (!imageGallery.current) return;

      const serieIndex = seriesDisplay.findIndex(
        (serieDisplay) =>
          serieDisplay.seriesName.toLowerCase() ===
          searchParams.get("serie")?.toLowerCase()
      );

      if (serieIndex !== -1) {
        changeSerieHandler(serieIndex);
        if (imageGallery.current?.current) {
          imageGallery.current.current.ToPosition(serieIndex);
        }
      } else {
        changeSerieHandler(0);
      }
    }, 100);
  }, [changeSerieHandler, searchParams, seriesDisplay, type]);

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
    <BasicLayout noFooter>
      {typeInfo && seriesDisplay && (
        <IntroSection
          ref={imageGallery}
          title={
            serie
              ? serie.SerieName !== "None"
                ? `${serie.SerieName}`
                : type?.toUpperCase() ?? ""
              : ""
          }
          subTitle={serie.SerieName !== "None" ? "Series" : ""}
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
