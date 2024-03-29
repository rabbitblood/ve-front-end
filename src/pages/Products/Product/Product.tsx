import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "@/pages/Products/Products.css";
import "./product.css";
import { FormButton } from "@/components/atoms/FormButton/FormButton";

//images
import banner from "@/assets/test-banner.webp";
// import chockerDemo from "@/assets/chocker-demo.webp";
// import braceletDemo from "@/assets/bracelet-demo.webp";
import collar from "@/assets/collar-demo.webp";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function Product() {
  const ProductData = {
    name: "special summer hat for lady",
    tag: ["summer best", "new arrival", "best seller"],
    price: "123",
    src: collar,
    star: 4,
    reviews: 124,
    colorOptions: ["red", "blue", "green"],
    sizeOptions: ["S", "M", "L"],
    originalPrice: 226,
  };

  const [selectedColor, setSelectedColor] = useState(
    ProductData.colorOptions[0]
  );
  const [selectedSize, setSelectedSize] = useState(ProductData.sizeOptions[0]);

  const { productid } = useParams();

  const images = [
    {
      original: banner,
      thumbnail: banner,
    },
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <>
      <Header />
      <div className="product-page">
        <div className="product-image-container product">
          <ImageGallery
            additionalClass="product"
            items={images}
            showThumbnails={true}
            showFullscreenButton={false}
            showNav={false}
            showPlayButton={false}
            showBullets={true}
            autoPlay={true}
            slideInterval={5000}
            infinite={true}
            disableSwipe={false}
          />
        </div>
        <section className="product-description-section">
          <h1 className="hide">Product:{productid}</h1>

          {/* name */}
          <h2 className="product-name">{ProductData.name}</h2>

          {/** tags */}
          <div className="tags">
            {ProductData.tag.map((value, idx) => {
              return (
                <span key={idx} className="tag">
                  {value}
                </span>
              );
            })}
          </div>

          {/** stars */}
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="star">
                {ProductData.star >= star ? "★" : "☆"}
              </span>
            ))}
            <span className="reviews">({ProductData.reviews} reviews)</span>
          </div>

          {/** price */}
          <div className="price-container">
            <span className="price">${ProductData.price}</span>
            {ProductData.originalPrice && (
              <span className="original-price">
                {ProductData.originalPrice}
              </span>
            )}
          </div>

          {/** color options */}
          <div className="color">
            <h2 className="option-name">Available Colors</h2>
            <div className="color-options">
              {ProductData.colorOptions.map((color, idx) => {
                return (
                  <div
                    key={idx}
                    className={
                      "color-option" +
                      (selectedColor === color ? " selected" : "")
                    }
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  ></div>
                );
              })}
            </div>
          </div>

          {/** size options */}
          <div className="size">
            <h2 className="option-name">Available Sizes</h2>
            <div className="size-options">
              {ProductData.sizeOptions.map((size, idx) => {
                return (
                  <div
                    key={idx}
                    className={
                      "size-option" + (selectedSize === size ? " selected" : "")
                    }
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="buy-button">
            <FormButton>Purchase Now</FormButton>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
