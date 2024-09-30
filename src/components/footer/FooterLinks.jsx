import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <div className="footer-links-wrapper">
      <div className="footer-links-item">
        <h2 className="footer-links-item-title">Usefull Links</h2>
        <ul className="footer-links">
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/authors" className="footer-link">
            Authors
          </Link>
          <Link to="/about-us" className="footer-link">
            About Us
          </Link>
          <Link to="/contact-us" className="footer-link">
            Contact Us
          </Link>
        </ul>
      </div>
      <div className="footer-links-item">
        <h2 className="footer-links-item-title">Contact Information</h2>
        <div className="footer-address-wrapper">
          <div className="footer-address-item">
            <Link to="/contact-us">
              <i className="bi bi-geo-alt-fill"></i>
            </Link>
            Palestine - Gaza - TelAlhowa
          </div>
          <div className="footer-address-item">
            <Link to="/contact-us">
              <i className="bi bi-telephone-fill"></i>
            </Link>
            123-456-789
          </div>
          <div className="footer-address-item">
            <Link to="/contact-us">
              <i className="bi bi-envelope-fill"></i>
            </Link>
            bookstore@gmail.com
          </div>
        </div>
      </div>
      <div className="footer-links-item">
        <h2 className="footer-links-item-title">About Us</h2>
        <p className="footer-description">
          Welcome to our bookstore! We offer a curated selection of books across
          genres, from bestsellers to timeless classics. Whether you're after a
          new read or a hidden gem, we have something for every reader.
        </p>
        <p className="footer-copyright">
          <span>©</span> 2024 <span>Bookstore</span>. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterLinks;
