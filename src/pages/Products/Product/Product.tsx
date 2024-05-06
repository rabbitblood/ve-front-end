import { useParams } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import "@/pages/Products/Products.css";
import "./product.css";
import { FormButton } from "@/components/atoms/FormButton/FormButton";
import HorizontalMoveImageViewer from "@/components/atoms/HorizontalMoveImageViewer/HorizontalMoveImageViewer";
import { useAppDispatch } from "@/lib/redux/reduxDispatcher";
import { addItemToCart } from "@/lib/redux/store/cartSlice";

import BasicLayout from "@/components/layout/BasicLayout/BasicLayout";
import { mockProducts } from "@/data/mockData";
import { useEffect } from "react";
import { setNav } from "@/lib/redux/store/navSlice";

export default function Product() {
  const { productid } = useParams<{ productid: string }>();
  const dispatch = useAppDispatch();

  const product = mockProducts.find(
    (product) => product.productId === productid
  );

  useEffect(() => {
    dispatch(
      setNav({
        nav: [
          { name: "Home", url: "/" },
          {
            name: product?.type.typenName as string,
            url: `/products/ProductIntro/${product?.type.typenName}`,
          },
          {
            name: product?.series.SerieName as string,
            url: `/products/${product?.type.typenName}/${product?.series.SerieName}`,
          },
          {
            name: product?.name as string,
            url: `/products/view/${product?.productId}`,
          },
        ],
      })
    );
  }, [dispatch, product]);

  function addItemToCartHandler() {
    if (!product) return;
    dispatch(
      addItemToCart({
        productId: product?.productId,
        amount: 1,
        productName: product?.name,
        productDesc: product?.description,
        price: 100,
        imageUrl: product?.images[0],
      })
    );
  }

  return (
    <BasicLayout>
      <div className="product-page">
        <HorizontalMoveImageViewer images={product?.images ?? []} />{" "}
        <div className="detail">
          <div className="info-container">
            <h2 className="title">{product?.name}</h2>
            <h3 className="sub-title">{product?.series.SerieName}</h3>
            <p className="price">${product?.price}CAD</p>
            <p className="desc">{product?.description}</p>
          </div>
          <div className="form-button-container">
            <FormButton
              onClick={() => {
                addItemToCartHandler();
              }}
            >
              Add to cart
            </FormButton>{" "}
          </div>
        </div>
      </div>
    </BasicLayout>
  );

  // return (
  //   <>
  //     <Header />
  //     <div className="product-page">
  //       <div className="product-image-container product">
  //         <ImageGallery
  //           additionalClass="product"
  //           items={images}
  //           showThumbnails={true}
  //           showFullscreenButton={false}
  //           showNav={false}
  //           showPlayButton={false}
  //           showBullets={true}
  //           autoPlay={true}
  //           slideInterval={5000}
  //           infinite={true}
  //           disableSwipe={false}
  //         />
  //       </div>
  //       <section className="product-description-section">
  //         <h1 className="hide">Product:{productid}</h1>

  //         {/* name */}
  //         <h2 className="product-name">{ProductData.name}</h2>

  //         {/** tags */}
  //         <div className="tags">
  //           {ProductData.tag.map((value, idx) => {
  //             return (
  //               <span key={idx} className="tag">
  //                 {value}
  //               </span>
  //             );
  //           })}
  //         </div>

  //         {/** stars */}
  //         <div className="stars">
  //           {[1, 2, 3, 4, 5].map((star) => (
  //             <span key={star} className="star">
  //               {ProductData.star >= star ? "★" : "☆"}
  //             </span>
  //           ))}
  //           <span className="reviews">({ProductData.reviews} reviews)</span>
  //         </div>

  //         {/** price */}
  //         <div className="price-container">
  //           <span className="price">${ProductData.price}</span>
  //           {ProductData.originalPrice && (
  //             <span className="original-price">
  //               {ProductData.originalPrice}
  //             </span>
  //           )}
  //         </div>

  //         {/** color options */}
  //         <div className="color">
  //           <h2 className="option-name">Available Colors</h2>
  //           <div className="color-options">
  //             {ProductData.colorOptions.map((color, idx) => {
  //               return (
  //                 <div
  //                   key={idx}
  //                   className={
  //                     "color-option" +
  //                     (selectedColor === color ? " selected" : "")
  //                   }
  //                   style={{ backgroundColor: color }}
  //                   onClick={() => setSelectedColor(color)}
  //                 ></div>
  //               );
  //             })}
  //           </div>
  //         </div>

  //         {/** size options */}
  //         <div className="size">
  //           <h2 className="option-name">Available Sizes</h2>
  //           <div className="size-options">
  //             {ProductData.sizeOptions.map((size, idx) => {
  //               return (
  //                 <div
  //                   key={idx}
  //                   className={
  //                     "size-option" + (selectedSize === size ? " selected" : "")
  //                   }
  //                   onClick={() => setSelectedSize(size)}
  //                 >
  //                   {size}
  //                 </div>
  //               );
  //             })}
  //           </div>
  //         </div>

  //         <div className="buy-button">
  //           <FormButton>Purchase Now</FormButton>
  //         </div>
  //       </section>
  //     </div>
  //     <Footer />
  //   </>
  // );
}
