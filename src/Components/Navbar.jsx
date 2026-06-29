import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <>
     <div className="top-strip">
        <div className="scroll-text">
          🚍 Luxury Coach Body Building • 🚌 School Bus Manufacturing •
          🛏️ Sleeper Bus Fabrication • ✨ Premium Bus Interiors •
          📞 +91 9660243457 • 📧 vishwakarma.busbody@gmail.com
        </div>
      </div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      
      <div className="container">

        <Link
          className="navbar-brand d-flex align-items-center fw-bold"
          to="/"
        >
          <img src={logo} alt="logo" className="navbar-logo" />

          <span className="company-name">
            Vishwakarma Body Builders
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <Link className="nav-link" to="/">
              Home
            </Link>

            <Link className="nav-link" to="/about">
              About Us
            </Link>

            <Link className="nav-link" to="/services">
              Services
            </Link>

            <Link className="nav-link" to="/gallery">
              Gallery
            </Link>

            <Link className="nav-link" to="/process">
              Process
            </Link>

            <Link className="nav-link" to="/contact">
              Contact
            </Link>

            <a
              href="tel:9660244357"
              className="btn btn-warning ms-lg-3"
            >
              <FaPhoneAlt /> Call Now
            </a>

          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;