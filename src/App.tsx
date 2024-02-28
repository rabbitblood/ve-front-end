import { Link } from "react-router-dom";

//images
import user from "@/assets/user.png";
import search from "@/assets/search.png";
import cart from "@/assets/cart.png";

function App() {
  return (
    <>
      <header className="header">
        <div className="ad">
          <p>Free Shiiping 150+ Shop Now</p>
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
        <Link to="/customize">
          <div className="banner">
            <div className="banner__explain">Here to know why we special?</div>
            <div className="banner__title">START YOUR CUSTOMIZE</div>
          </div>
        </Link>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
