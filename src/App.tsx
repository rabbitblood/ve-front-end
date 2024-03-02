import { Link } from "react-router-dom";

//images
import user from "@/assets/user.png";
import search from "@/assets/search.png";
import cart from "@/assets/cart.png";
import chockerDemo from "@/assets/chocker-demo.webp";
import braceletDemo from "@/assets/bracelet-demo.webp";
import collar from "@/assets/collar-demo.webp";

function App() {
  return (
    <>
      <header className="header">
        <div className="ad">
          <p>Free Shipping 150+ Shop Now</p>
        </div>

        <h1 className="brand-name">Vé</h1>
        <div className="header-groups">
          <nav className="nav">
            <div>Categories</div>
            <div>About Us</div>
            <div>Contact Us</div>
          </nav>
          <div className="icons">
            <div>
              <img className="icon" src={user} alt="user" />
            </div>
            <div>
              <img className="icon" src={search} alt="search" />
            </div>
            <div>
              <img className="icon" src={cart} alt="shopping cart" />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="banner"></div>

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
            <div className="product">
              <img className="product__image"></img>
              <p className="tag">summer best</p>
              <p className="name">hat</p>
              <p className="price">123$</p>
            </div>
            <div className="product">
              <img className="product__image"></img>
              <p className="tag">summer best</p>
              <p className="name">hat</p>
              <p className="price">123$</p>
            </div>
            <div className="product">
              <img className="product__image"></img>
              <p className="tag">summer best</p>
              <p className="name">hat</p>
              <p className="price">123$</p>
            </div>
            <div className="product">
              <img className="product__image"></img>
              <p className="tag">summer best</p>
              <p className="name">hat</p>
              <p className="price">123$</p>
            </div>
            <div className="product">
              <img className="product__image"></img>
              <p className="tag">summer best</p>
              <p className="name">hat</p>
              <p className="price">123$</p>
            </div>
            <div className="product">
              <img className="product__image"></img>
              <p className="tag">summer best</p>
              <p className="name">hat</p>
              <p className="price">123$</p>
            </div>
            <div className="product">
              <img className="product__image"></img>
              <p className="tag">summer best</p>
              <p className="name">hat</p>
              <p className="price">123$</p>
            </div>
            <div className="product">
              <img className="product__image"></img>
              <p className="tag">summer best</p>
              <p className="name">hat</p>
              <p className="price">123$</p>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
