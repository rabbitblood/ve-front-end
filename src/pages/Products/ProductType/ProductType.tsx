import BasicLayout from "@/components/layout/BasicLayout/BasicLayout";
import { Link, useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "./ProductType.css";
import { Products } from "@/data/mockData";

import productImage from "@/assets/product-image/IMG_9822 3.png";
import productImage2 from "@/assets/product-image/IMG_5577 1.png";
export default function ProductType() {
  //get param
  const { type, series } = useParams<{ type: string; series: string }>();

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

  return (
    <BasicLayout>
      <div className="product-type-page">
        <div className="banner">
          <ImageGallery
            additionalClass="banner"
            items={images}
            showThumbnails={false}
            showFullscreenButton={false}
            showNav={false}
            showPlayButton={false}
            showBullets={true}
            autoPlay={true}
            slideInterval={5000}
            infinite={true}
            disableSwipe={false}
            //onSlide={(index) => console.log(index)}
          />
          <a href="#desc" className="banner-pull-button" />
          <div className="banner-text-container">
            <h2 className="title">{type}</h2>
            <h3 className="sub-title">Sub Title</h3>
            <p className="desc">-----------------Desc</p>
          </div>
        </div>
        <div id="desc" className="product-type-desc">
          <h2 className="title">GET THE HIGHLIGHTS</h2>
          <p className="t1">
            "Irresistible Charm: The captivating texture of TAURILLON LAGUN calf
            leather"
          </p>
          <p className="t2">
            TAURILLON LAGUN calf leather, sourced from the REMY CARRIAT factory
            in France, is the preferred material for Hermès Picotin and Lindy
            bags. This full-grain leather, tanned with mineral substances,
            boasts a consistently even surface treatment, preserving its soft
            and silky feel. Hand polishing brings out its natural luster,
            showcasing exquisite texture and elegant quality that is simply
            irresistible.
          </p>
          <img className="img1" src={productImage2} alt="" />
          <div className="t3">
            <p>
              "Resilient Breathability: Providing comfortable assurance for
              everyday wear with three-year calf leather"
            </p>
            <br />
            <p>
              Selected for its distinct texture and delicate pores, the
              three-year calf leather offers high breathability, making it ideal
              for daily wear. This premium material boasts excellent tear
              resistance and flexibility, ensuring unrestricted comfort for your
              daily outfits.
            </p>
          </div>
          <img className="img2" src={productImage} alt="" />
          <div className="t4">
            <p>
              "Exquisite Craftsmanship: The outstanding quality of double-wave
              saddle stitching and leather edge oil polishing"
            </p>
            <br />
            <p>
              We employ the double-wave saddle stitching technique to guarantee
              the exceptional durability of our products, ensuring unparalleled
              quality. This craftsmanship enhances the product's strength and
              durability, making it suitable for long-term wear. Additionally,
              each product undergoes manual leather edge oil treatment and
              polishing, fortifying the edges to prevent damage and
              significantly extending the product's lifespan.
            </p>
          </div>
          <img className="img3" src={productImage} alt="" />
        </div>
        <div className="products-section">
          <h2 className="section-name">
            {series} Series {type}
          </h2>
          <div className="products-container">
            <div className="products">
              {Products.map((product, idx) => {
                return (
                  <Link to={`/products/view/${product.productid}`}>
                    <div key={idx} className="product">
                      <img className="product-image" src={product.src} alt="" />
                      <div className="color-options">
                        {product.colorOptions.map((color, idx) => {
                          return (
                            <div
                              key={idx}
                              className={"color-option"}
                              style={{ backgroundColor: color }}
                            ></div>
                          );
                        })}
                      </div>
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-base">{product.base}</p>
                      <p className="product-price">{product.price}</p>
                    </div>
                  </Link>
                );
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
