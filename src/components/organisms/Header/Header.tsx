//import user from "@/assets/user.png";
//import search from "@/assets/search.png";
import cartIcon from "@/assets/cart.png";
// import menu from "@/assets/menu.svg";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import MenuButton from "../../atoms/MenuButton/MenuButton";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store/store";
import "./Header.css";
import { useAppDispatch } from "@/lib/redux/reduxDispatcher";
import { resetNav } from "@/lib/redux/store/navSlice";

export default function Header() {
  const menuElement = useRef<HTMLDivElement>(null);
  const [openNav, setOpenNav] = useState(false);
  const cartAmount = useSelector((state: RootState) => state.cart.items.length);
  const pageNav = useSelector((state: RootState) => state.nav);
  const [highlightCart, setHighlightCart] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // openMenuButton.current?.addEventListener("click", () => {
    //   setHeaderOpen(true);
    //   console.log("open");
    // });
    // closeMenuButton.current?.addEventListener("click", () => {
    //   setHeaderOpen(false);
    //   console.log("close");
    // });

    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        menuElement.current?.classList.add("scroll");
      } else {
        menuElement.current?.classList.remove("scroll");
      }
    });

    return () => {
      dispatch(resetNav());
    };

    addEventListener("cartChange", () => cartChangeHandler());
  }, []);

  function cartChangeHandler() {
    setHighlightCart(true);
    setTimeout(() => {
      setHighlightCart(false);
    }, 200);
  }

  return (
    <header className="header">
      {/* <div className="ad">
        <p>Free Shipping 150+ Shop Now</p>
      </div> */}

      <div
        ref={menuElement}
        className={
          "menu"
          //+ ( headerOpen ? " open" : "")
        }
      >
        <div className="header-group">
          <MenuButton isOpen={openNav} onClick={() => setOpenNav(!openNav)} />
          <div className="icons">
            {/* <div>
              <Link to="/account/login">
                <img className="icon" src={user} alt="user" />
              </Link>
            </div> */}
            <Link to={"/checkout"}>
              <img
                className={"icon" + (highlightCart ? " highlight" : "")}
                src={cartIcon}
                alt="shopping cart"
              />
              {cartAmount}
            </Link>

            {/* <div>
              <img className="icon" src={search} alt="search" />
            </div> */}
          </div>{" "}
          <h1 className="brand-name">
            <Link to={"/"}>Vé </Link>
          </h1>
        </div>

        <nav className={`nav ${openNav ? "open" : ""}`}>
          <Link to={"/products/ProductIntro/" + "chocker"}>
            <div
              className="nav-link"
              onClick={() => {
                setOpenNav(!openNav);
              }}
            >
              Chocker
            </div>
          </Link>

          <Link to={"/products/ProductIntro/" + "bracelet"}>
            <div
              className="nav-link"
              onClick={() => {
                setOpenNav(!openNav);
              }}
            >
              Bracelet
            </div>
          </Link>

          <Link to={"/products/ProductIntro/" + "accessories"}>
            <div
              className="nav-link"
              onClick={() => {
                setOpenNav(!openNav);
              }}
            >
              Accessories
            </div>
          </Link>

          <Link to={"/products"}>
            <div
              className="nav-link"
              onClick={() => {
                setOpenNav(!openNav);
              }}
            >
              All Products
            </div>
          </Link>

          <Link to={"/terms/our-stories"}>
            <div
              className="nav-link"
              onClick={() => {
                setOpenNav(!openNav);
              }}
            >
              Our Stories
            </div>
          </Link>

          <Link to={"/terms/contact-us"}>
            <div
              className="nav-link"
              onClick={() => {
                setOpenNav(!openNav);
              }}
            >
              Contact Us
            </div>
          </Link>
        </nav>
      </div>
      <div className="page-nav">
        <ul className="page-nav-ul">
          {pageNav.nav.map((value, idx) => {
            return (
              <li key={idx} className="nav-link">
                <Link to={value.url}>{value.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
