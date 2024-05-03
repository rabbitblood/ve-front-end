import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "./components/Header";
import "react-image-gallery/styles/css/image-gallery.css";
import "@/css/overwrite/react-image-gallery/react-image-gallery.css";
import Banner from "./components/organisms/Banner/Banner";

//images
import banner from "@/assets/test-banner.png";
import chockerDemo from "@/assets/chocker-demo.webp";
import braceletDemo from "@/assets/bracelet-demo.webp";
import collar from "@/assets/collar-demo.webp";
import { FormButton } from "./components/atoms/FormButton/FormButton";

function App() {
  const top8FreshStockProducts = [
    {
      name: "hat",
      tag: "summer best",
      price: "123",
      src: collar,
    },
    {
      name: "hat",
      tag: "summer best",
      price: "123",
      src: chockerDemo,
    },
    {
      name: "hat",
      tag: "summer best",
      price: "123",
      src: collar,
    },
    {
      name: "hat",
      tag: "summer best",
      price: "123",
      src: braceletDemo,
    },
    {
      name: "hat",
      tag: "summer best",
      price: "123",
      src: chockerDemo,
    },
    {
      name: "hat",
      tag: "summer best",
      price: "123",
      src: braceletDemo,
    },
    {
      name: "hat",
      tag: "summer best",
      price: "123",
      src: collar,
    },
    {
      name: "hat",
      tag: "summer best",
      price: "123",
      src: braceletDemo,
    },
  ];

  const top5InstFeed = [
    {
      src: collar,
    },
    {
      src: braceletDemo,
    },
    {
      src: chockerDemo,
    },
    {
      src: braceletDemo,
    },
    {
      src: chockerDemo,
    },
  ];

  const slideData = [
    {
      original: banner,
      thumbnail: banner,
      displayElement: (
        <div className="banner-text-container">
          <h2 className="title">Choker</h2>
          <Link to={"/products/ProductIntro/" + "choker"}>
            <FormButton>Explore More</FormButton>{" "}
          </Link>
        </div>
      ),
    },
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
      displayElement: (
        <div className="banner-text-container">
          <h2 className="title">Bracelet</h2>
          <Link to={"/products/ProductIntro/" + "bracelet"}>
            <FormButton>Explore More</FormButton>{" "}
          </Link>
        </div>
      ),
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
      displayElement: (
        <div className="banner-text-container">
          <h2 className="title">Accessories</h2>
          <Link to={"/products/ProductIntro/" + "accessories"}>
            <FormButton>Explore More</FormButton>{" "}
          </Link>
        </div>
      ),
    },
  ];

  return (
    <>
      <Header />
      <main>
        <Banner slideData={slideData} />
        <section className="customize">
          <h2 className="customize__title">START YOUR CUSTOMIZE</h2>
          <div className="customize__products">
            <Link to="/customize">
              <div className="product">
                <img className="product__image" src={chockerDemo} alt="" />
                <h3 className="product__name">Chocker</h3>
              </div>
            </Link>

            <Link to="/customize">
              <div className="product">
                <img className="product__image" src={braceletDemo} alt="" />
                <h3 className="product__name">Bracelet</h3>
              </div>
            </Link>

            <Link to="/customize">
              <div className="product">
                <img className="product__image" src={collar} alt="" />
                <h3 className="product__name">Pet Collar</h3>
              </div>
            </Link>
          </div>
        </section>

        <section className="introduction">
          <h2>introduction</h2>
        </section>

        <section className="fresh-stock">
          <h2 className="fresh-stock__title">FRESH STOCK</h2>
          <div className="products">
            {top8FreshStockProducts.map((product, index) => {
              return (
                <div className="product" key={index}>
                  <img className="product__image" src={product.src}></img>
                  <p className="product__tag">{product.tag}</p>
                  <p className="product__name">{product.name}</p>
                  <p className="product__price">{product.price}$</p>
                </div>
              );
            })}
          </div>
          <div className="view-all-product-button-container">
            <button className="view-all-product-button">
              view all products
            </button>
          </div>
        </section>

        <section className="follow-inst">
          <h2 className="follow-inst__title">Follow us on Instagram</h2>
          <h3 className="follow-inst__sub-title">@Vé</h3>
          <div className="inst-feed">
            {top5InstFeed.map((feed, index) => {
              return (
                <div className="feed-container" key={index}>
                  <img className="inst-feed__image" src={feed.src} />
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
