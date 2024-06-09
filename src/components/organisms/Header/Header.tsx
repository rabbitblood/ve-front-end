"use client";
//import user from "@/assets/user.png";
//import search from "@/assets/search.png";
import cartIcon from "@/assets/cart.png";
// import menu from "@/assets/menu.svg";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import MenuButton from "../../atoms/MenuButton/MenuButton";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store/store";
import "./Header.css";
import { useAppDispatch } from "@/lib/redux/reduxDispatcher";
import { resetNav } from "@/lib/redux/store/navSlice";
import { useIsMobile } from "@/hooks/pageUtil";

export default function Header() {
  const menuElement = useRef<HTMLDivElement>(null);
  const [openNav, setOpenNav] = useState(false);
  const cartAmount = useSelector((state: RootState) => state.cart.items.length);
  const pageNav = useSelector((state: RootState) => state.nav);
  const [highlightCart, setHighlightCart] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const isMobile = useIsMobile();
  const dispatch = useAppDispatch();

  console.log(cartAmount);
  console.log(pageNav);

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
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });

    dispatch(resetNav());

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
        className={`menu ${openNav ? "open" : ""} ${isScroll && "scroll"}`}
      >
        <div className="header-group">
          <MenuButton isOpen={openNav} onClick={() => setOpenNav(!openNav)} />
          <div className="icons">
            {/* <div>
              <Link to="/account/login">
                <img className="icon" src={user} alt="user" />
              </Link>
            </div> */}
            <Link href={"/checkout/order-summary"}>
              <div className="icon-container">
                <img
                  className={"icon" + (highlightCart ? " highlight" : "")}
                  src={cartIcon.src}
                  alt="shopping cart"
                />
                <span className="cart-amount">{cartAmount}</span>
              </div>
            </Link>

            {/* <div>
              <img className="icon" src={search} alt="search" />
            </div> */}
          </div>{" "}
          <h1 className="brand-name">
            <Link href={"/"}>VÉ </Link>
          </h1>
        </div>

        {pageNav && !isMobile && pageNav.nav.length > 0 && (
          <div className="page-nav" style={pageNav.additionalStyles}>
            <ul className="page-nav-ul">
              {pageNav.nav.map((value, idx) => {
                return (
                  <li key={idx} className="nav-link">
                    {idx !== 0 && <div className="custom-marker"></div>}
                    <Link href={value.url}>{value.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <nav className={`nav ${openNav ? "open" : ""}`}>
          <Link href={"/products/productIntro/" + "choker"}>
            <div
              className="nav-link"
              onClick={() => {
                setOpenNav(!openNav);
              }}
            >
              Choker
            </div>
          </Link>

          <Link href={"/products/productIntro/" + "bracelet"}>
            <div
              className="nav-link"
              onClick={() => {
                setOpenNav(!openNav);
              }}
            >
              Bracelet
            </div>
          </Link>

          <Link href={"/products/productIntro/" + "accessory"}>
            <div
              className="nav-link"
              onClick={() => {
                setOpenNav(!openNav);
              }}
            >
              Accessories
            </div>
          </Link>

          <Link href={"/products"}>
            <div
              className="nav-link"
              onClick={() => {
                setOpenNav(!openNav);
              }}
            >
              All Products
            </div>
          </Link>

          <Link href={"/info/our-stories"}>
            <div
              className="nav-link"
              onClick={() => {
                setOpenNav(!openNav);
              }}
            >
              Our Stories
            </div>
          </Link>

          <Link href={"/info/contact-us"}>
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
    </header>
  );
}
