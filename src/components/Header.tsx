import user from "@/assets/user.png";
import search from "@/assets/search.png";
import cart from "@/assets/cart.png";
import menu from "@/assets/menu.svg";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const openMenuButton = useRef<HTMLImageElement>(null);
  const closeMenuButton = useRef<HTMLImageElement>(null);
  const menuElement = useRef<HTMLDivElement>(null);
  const [headerOpen, setHeaderOpen] = useState(false);

  useEffect(() => {
    openMenuButton.current?.addEventListener("click", () => {
      setHeaderOpen(true);
      console.log("open");
    });
    closeMenuButton.current?.addEventListener("click", () => {
      setHeaderOpen(false);
      console.log("close");
    });

    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        menuElement.current?.classList.add("scroll");
      } else {
        menuElement.current?.classList.remove("scroll");
      }
    });
  }, []);

  return (
    <header className="header">
      <img
        ref={openMenuButton}
        src={menu}
        alt="open-menu"
        className={"open-menu-button" + (headerOpen ? " hide" : "")}
      />

      <Link to="/account/login">
        <img
          ref={closeMenuButton}
          src={menu}
          alt="close-menu"
          className={"close-menu-button" + (!headerOpen ? " hide" : "")}
        />
      </Link>
      {/* <div className="ad">
        <p>Free Shipping 150+ Shop Now</p>
      </div> */}

      <div ref={menuElement} className={"menu" + (headerOpen ? " open" : "")}>
        <h1 className="brand-name">Vé</h1>
        <div className="header-group">
          <nav className="nav">
            <div>Categories</div>
            <div>About Us</div>
            <div>Contact Us</div>
          </nav>
          <div className="icons">
            <div>
              <Link to="/account/login">
                <img className="icon" src={user} alt="user" />
              </Link>
            </div>
            <div>
              <img className="icon" src={search} alt="search" />
            </div>
            <div>
              <img className="icon" src={cart} alt="shopping cart" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
