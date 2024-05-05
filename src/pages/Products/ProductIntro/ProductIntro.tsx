import { useParams } from "react-router-dom";
import BasicLayout from "@/components/layout/BasicLayout/BasicLayout";
import IntroSection from "@/components/organisms/IntroSection/IntroSection";
import productImage from "@/assets/product-image/2 8.png";
import productImage2 from "@/assets/product-image/IMG_9822 3.png";
import { useState } from "react";

export default function ProductIntro() {
  //get param
  const { type } = useParams<{ type: string }>();
  const [serie, setSerie] = useState<VeProductSeries>({
    SerieName: "classic",
    type: { typenName: type as string },
  });

  const changeSerieHandler = (index: number) => {
    setSerie({ ...serie, SerieName: seriesDisplay[index].seriesName });
  };

  const seriesDisplay = [
    {
      seriesName: "classic",
      title: "Classic Base",
      subTitle: "series",
      description: `A minimalist and versatile base design suitable for various occasions and outfits. Crafted from double-sided cowhide, meticulously stitched with elegant wave patterns by skilled craftsmen, ensuring exceptional durability. `,
      image: productImage,
    },
    {
      seriesName: "pure",
      title: "Pure Base",
      subTitle: "series",
      description: `very pure and simple `,
      image: productImage2,
    },
  ];

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
