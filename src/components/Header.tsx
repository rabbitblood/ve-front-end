import user from "@/assets/user.png";
import search from "@/assets/search.png";
import cart from "@/assets/cart.png";
import menu from "@/assets/menu.svg";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const openMenuButton = useRef<HTMLImageElement>(null);
  const closeMenuButton = useRef<HTMLImageElement>(null);
  const [headerOpen, setHeaderOpen] = useState(false);

  useEffect(() => {
    openMenuButton.current?.addEventListener("click", () => {
      setHeaderOpen(true);
    });
  }, [openMenuButton]);

  useEffect(() => {
    closeMenuButton.current?.addEventListener("click", () => {
      setHeaderOpen(false);
    });
  }, [closeMenuButton]);

  return (
    <header className="header">
      <img
        ref={openMenuButton}
        src={menu}
        alt="open-menu"
        className={"open-menu-button" + (headerOpen ? " hide" : "")}
      />

      <img
        ref={closeMenuButton}
        src={menu}
        alt="close-menu"
        className={"close-menu-button" + (!headerOpen ? " hide" : "")}
      />
      {/* <div className="ad">
        <p>Free Shipping 150+ Shop Now</p>
      </div> */}

      <div className={"menu" + (headerOpen ? " open" : "")}>
        <h1 className="brand-name">Vé</h1>
        <div className="header-group">
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
      </div>
    </header>
  );
}
