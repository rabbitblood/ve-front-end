export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3 className="title">Ve</h3>
          <div className="items-group">
            <div className="footer__item">
              <a href="">
                565 Howe Street <br />
                Vancouver, BC V6C 2C2
              </a>
            </div>

            <div className="footer__item">
              <a href="">
                Monday - Thusday 12:00 - 18:00 <br />
                Friday - Sunday & Holidays: 11:00 - 19:00
              </a>
            </div>

            <div className="footer__item">
              <div className="medias">
                <img src="" alt="inst" />
                <img src="" alt="facebook" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer__section">
          <h3 className="title">Information</h3>
          <div className="items-group">
            <div className="footer__item">
              <a href="">About us</a>
            </div>{" "}
            <div className="footer__item">
              <a href="">Blog</a>
            </div>
            <div className="footer__item">
              <a href="">Contact us</a>
            </div>
            <div className="footer__item">
              <a href="">Returns</a>
            </div>
            <div className="footer__item">
              <a href="">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="footer__section">
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
            <button className="subscribe__button">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="copyright">
        <p>© 2024 Ve. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
