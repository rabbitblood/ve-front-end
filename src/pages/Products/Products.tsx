import Footer from "@/components/Footer";
import Header from "@/components/Header";

//images
import chockerDemo from "@/assets/chocker-demo.webp";
import braceletDemo from "@/assets/bracelet-demo.webp";
import collar from "@/assets/collar-demo.webp";

import "./Products.css";
import { Link } from "react-router-dom";

export default function Products() {
  const Products = [
    {
      productid: 1,
      name: "hat",
      tag: ["summer best", "featured", "new", "sale", "best seller"],
      price: "123",
      src: collar,
    },
    {
      productid: 2,
      name: "hat",
      tag: ["summer best"],
      price: "123",
      src: chockerDemo,
    },
    {
      productid: 3,
      name: "hat",
      tag: ["summer best", "featured"],
      price: "123",
      src: collar,
    },
    {
      productid: 4,
      name: "hat",
      tag: ["summer best"],
      price: "123",
      src: braceletDemo,
    },
    {
      productid: 5,
      name: "hat",
      tag: ["summer best", "featured"],
      price: "123",
      src: chockerDemo,
    },
    {
      productid: 6,
      name: "hat",
      tag: ["summer best"],
      price: "123",
      src: braceletDemo,
    },
    {
      productid: 7,
      name: "hat",
      tag: ["summer best"],
      price: "123",
      src: collar,
    },
    {
      productid: 8,
      name: "hat",
      tag: ["summer best", "featured"],
      price: "123",
      src: braceletDemo,
    },
  ];

  return (
    <>
      <Header />
      <main className="product-page">
        <div className="products-container">
          {Products.map((product, index) => (
            <div key={index} className="product">
              <Link to={"/products/" + product.productid}>
                <img className="image" src={product.src} alt="product" />
              </Link>
              <div className="desc-section">
                <h3 className="name">{product.name}</h3>
                <div className="tags">
                  {product.tag.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="price">{product.price}$</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
