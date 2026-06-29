import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        <div className="footer-row">

          {/* Company Info */}
          <div className="footer-col">
            <div className="footer-brand">
              <img src={logo} alt="logo" className="footer-logo" />

              <h4>Vishwakarma Body Builders</h4>

              <p>
                Premium Bus Body Manufacturing, Luxury Coach
                Fabrication, School Bus Manufacturing and
                Custom Bus Design Solutions in Jaipur.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h5>Contact Information</h5>

            <p>
              📍{" "}
              <a
                href="https://maps.google.com/?q=27.046137,75.806244"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Khasra No. 430-431, 436, Sevapura, New Transport Nagar, Jaipur, Rajasthan 
              </a>
            </p>

            <p>
              📧{" "}

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=vishwakarma.busbody@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                vishwakarma.busbody@gmail.com
              </a>

            </p>

            <p>
              📞{" "}
              <a
                href="tel:+919660244357"
                className="footer-link"
              >
               +91 9660244357
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h5>Quick Links</h5>

            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/process">Process</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

        </div>

        <hr />

        <div className="footer-bottom">
          <p>
            © 2026 Vishwakarma Body Builders | All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;