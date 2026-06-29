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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3597.1201106608733!2d75.80398607125711!3d27.045291616909953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1782741109159!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "10px" }}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                title="Google Map"
              >
              Khasra No. 430-431, 436, Sevapura, New Transport Nagar, Jaipur, Rajasthan
</iframe>
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