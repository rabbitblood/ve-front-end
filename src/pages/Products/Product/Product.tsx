import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

//images
import banner from "@/assets/test-banner.webp";
// import chockerDemo from "@/assets/chocker-demo.webp";
// import braceletDemo from "@/assets/bracelet-demo.webp";
import collar from "@/assets/collar-demo.webp";

export default function Product() {
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

  const ProductData = {
    name: "hat",
    tag: "summer best",
    price: "123",
    src: collar,
  };

  return (
    <>
      <Header />
      <div className="product-page">
        <ImageGallery
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
        <h1>Product:{productid}</h1>
        <h2>{ProductData.name}</h2>
        <p>{ProductData.tag}</p>
        <p>{ProductData.price}</p>
      </div>
    </>
  );
}
