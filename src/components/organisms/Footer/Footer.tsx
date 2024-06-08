// import facebookIcon from "@/assets/social-media-icon/facebook.svg";
// import { FormButton } from "./atoms/FormButton/FormButton";
import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3 className="title">Help</h3>
          <div className="items-group">
            <div className="footer__item">
              <Link href={"/info/care-instructions"}>Care Instructions</Link>
            </div>

            <div className="footer__item">
              <div>
                {" "}
                <Link href={"/info/privacy-policy"}>Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__section">
          <h3 className="title">Service</h3>
          <div className="items-group">
            <div className="footer__item">
              <Link href={"/info/return-and-refund"}>Return and Refund</Link>
            </div>
          </div>
          <div className="items-group">
            <div className="footer__item">
              <Link href={"/info/customize"}>Customize</Link>
            </div>
          </div>
        </div>

        <div className="footer__section">
          <h3 className="title">About Ve</h3>
          <div className="items-group">
            <div className="footer__item">
              <Link href={"/info/our-stories"}>Ve Story</Link>
            </div>
          </div>
        </div>

        <div className="footer__section">
          <h3 className="title">Contact Us</h3>
          <div className="items-group">
            <div className="footer__item">
              <Link href={"/info/contact-us"}>Instagram and email</Link>
            </div>
          </div>
        </div>

        {/* <div className="footer__section">
          <h3 className="title">Join The Newsletter</h3>
          <form className="subscribe">
            <p>
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <input
              className="subscribe__input"
              type="text"
              placeholder="Enter your email address"
            />
            <FormButton className="subscribe__button">Subscribe</FormButton>
          </form>
        </div> */}
      </div>
      <div className="brand-name-container">
        <h1>
          <Link className="brand-name" href={"/"}>
            VÉ{" "}
          </Link>
        </h1>
      </div>
      <div className="copyright">
        <p>© 2024 Vé. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
