import user from "@/assets/user.png";
import search from "@/assets/search.png";
import cart from "@/assets/cart.png";
import menu from "@/assets/menu.svg";
import { useEffect, useRef } from "react";

export default function Header() {
  const openMenuButton = useRef<HTMLImageElement>(null);
  const headerMenu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = openMenuButton.current;
    const e = () => {
      headerMenu.current?.classList.toggle("open");
    };

    button?.addEventListener("click", () => e);

    return () => {
      button?.removeEventListener("click", e);
    };
  }, [headerMenu, openMenuButton]);

  return (
    <header className="header">
      <img
        ref={openMenuButton}
        src={menu}
        alt="open-menu"
        className="open-menu-button"
      />
      {/* <div className="ad">
        <p>Free Shipping 150+ Shop Now</p>
      </div> */}

      <div className="menu" ref={headerMenu}>
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
