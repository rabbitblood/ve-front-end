import Footer from "@/components/Footer";
import Header from "@/components/Header";

//images
import chockerDemo from "@/assets/chocker-demo.webp";
import braceletDemo from "@/assets/bracelet-demo.webp";
import collar from "@/assets/collar-demo.webp";

import "./Products.css";

export default function Products() {
  const Products = [
    {
      name: "hat",
      tag: ["summer best", "featured", "new", "sale", "best seller"],
      price: "123",
      src: collar,
    },
    {
      name: "hat",
      tag: ["summer best"],
      price: "123",
      src: chockerDemo,
    },
    {
      name: "hat",
      tag: ["summer best", "featured"],
      price: "123",
      src: collar,
    },
    {
      name: "hat",
      tag: ["summer best"],
      price: "123",
      src: braceletDemo,
    },
    {
      name: "hat",
      tag: ["summer best", "featured"],
      price: "123",
      src: chockerDemo,
    },
    {
      name: "hat",
      tag: ["summer best"],
      price: "123",
      src: braceletDemo,
    },
    {
      name: "hat",
      tag: ["summer best"],
      price: "123",
      src: collar,
    },
    {
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
              <img className="image" src={product.src} alt="product" />
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
