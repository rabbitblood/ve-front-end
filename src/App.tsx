import { Link } from "react-router-dom";

//images
import user from "@/assets/user.png";
import search from "@/assets/search.png";
import cart from "@/assets/cart.png";

function App() {
  return (
    <>
      <div className="ad">
        <p>Free Shiiping 150+ Shop Now</p>
      </div>
      <header>
        <nav className="nav">
          <div className="brand-name">Vé</div>
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
        </nav>
      </header>
      <main>
        <Link to="/customize">
          <div className="banner">
            <div className="banner__explain">Here to know why we special?</div>
            <h2 className="banner__title">START YOUR CUSTOMIZE</h2>
          </div>
        </Link>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
