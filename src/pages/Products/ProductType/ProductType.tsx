import BasicLayout from "@/components/layout/BasicLayout/BasicLayout";
import { useParams } from "react-router-dom";
import "./ProductType.css";
import { mockProducts } from "@/data/mockData";

import productImage from "@/assets/product-image/IMG_9822 3.png";
import productImage2 from "@/assets/product-image/IMG_5577 1.png";
import Banner from "@/components/organisms/Banner/Banner";
import { useEffect, useRef } from "react";
import { useAppDispatch } from "@/lib/redux/reduxDispatcher";
import { setNav } from "@/lib/redux/store/navSlice";
import ProductCard from "@/components/atoms/ProductCard/ProductCard";

import WholeBlock from "@/components/atoms/TextSections/WholeBlock";
import TextWithImage from "@/components/atoms/TextSections/TextWithImage";

import arrowIcon from "@/assets/icons/arrow.png";

interface DescData {
  type: "WholeBlock" | "TextWithImage";
  title?: string;
  text?: string;
  image?: string;
  textRight?: boolean;
}

export default function ProductType() {
  //get param
  const { type, series } = useParams<{ type: string; series: string }>();
  const dispatch = useAppDispatch();
  const descArea = useRef<HTMLDivElement>(null);

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
            name: series as string,
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

  const images = [
    {
      original: productImage,
      thumbnail: productImage,
    },
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
  ];

  const descData: DescData[] = [
    {
      type: "WholeBlock",
      title:
        '"Irresistible Charm: The captivating texture of TAURILLON LAGUN calf leather"',
      text: `TAURILLON LAGUN calf leather, sourced from the REMY CARRIAT factory
      in France, is the preferred material for Hermès Picotin and Lindy
      bags. This full-grain leather, tanned with mineral substances,
      boasts a consistently even surface treatment, preserving its soft
      and silky feel. Hand polishing brings out its natural luster,
      showcasing exquisite texture and elegant quality that is simply
      irresistible.`,
    },
    {
      type: "WholeBlock",
      image: productImage2,
    },
    {
      type: "TextWithImage",
      title:
        '"Resilient Breathability: Providing comfortable assurance for everyday wear with three-year calf leather"',
      text: `Selected for its distinct texture and delicate pores, the three-year calf leather offers high breathability, making it ideal for daily wear. This premium material boasts excellent tear resistance and flexibility, ensuring unrestricted comfort for your daily outfits.`,
      image: productImage2,
    },
    {
      type: "TextWithImage",
      title:
        '"Exquisite Craftsmanship: The outstanding quality of double-wave saddle stitching and leather edge oil polishing"',
      text: `We employ the double-wave saddle stitching technique to guarantee
      the exceptional durability of our products, ensuring unparalleled
      quality. This craftsmanship enhances the product's strength and
      durability, making it suitable for long-term wear. Additionally,
      each product undergoes manual leather edge oil treatment and
      polishing, fortifying the edges to prevent damage and
      significantly extending the product's lifespan.`,
      image: productImage,
      textRight: true,
    },
  ];

  return (
    <BasicLayout>
      <div className="product-type-page">
        <Banner slideData={images}>
          <div className="banner-text-container">
            <h2 className="title">Title</h2>
            <h3 className="sub-title">Sub Title</h3>
            <p className="desc">-----------------Desc</p>
          </div>
        </Banner>
        <div ref={descArea} id="desc" className="product-type-desc">
          <img
            src={arrowIcon}
            className="to-products-button"
            onClick={scrollToProducts}
          />
          <h1>GET THE HIGHLIGHTS</h1>
          {descData.map((data, idx) => {
            if (data.type === "WholeBlock") {
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
            {series} Series {type}
          </h2>
          <div className="products-container">
            <div className="products">
              {mockProducts
                .filter((value) => {
                  return (
                    value.type.typenName === type &&
                    value.series.SerieName === series
                  );
                })
                .map((product, idx) => {
                  return <ProductCard key={idx} product={product} />;
                })}
            </div>
          </div>
        </div>
        <div className="customize-cta">
          <p>
            HAVE SOME CUSTOMIZE DESIGN IDEA WITH THIS SERIES ? <br />
            CONTACT US THROUGH INSTAGRAM OR EMAIL
          </p>
        </div>
      </div>
    </BasicLayout>
  );
}
