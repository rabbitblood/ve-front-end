import { useParams } from "react-router-dom";
import BasicLayout from "@/components/layout/BasicLayout/BasicLayout";
import IntroSection from "@/components/organisms/IntroSection/IntroSection";
import productImage from "@/assets/product-image/2 8.png";

export default function ProductIntro() {
  //get param
  const { type } = useParams<{ type: string }>();

  const images = [
    productImage,
    productImage,
    productImage,
    productImage,
    productImage,
    productImage,
  ];

  return (
    <BasicLayout>
      <IntroSection
        title={type ? type : ""}
        subTitle="series"
        images={images}
        description={`A minimalist and versatile base design suitable for various occasions and outfits. Crafted from double-sided cowhide, meticulously stitched with elegant wave patterns by skilled craftsmen, ensuring exceptional durability. `}
      />
    </BasicLayout>
  );
}
