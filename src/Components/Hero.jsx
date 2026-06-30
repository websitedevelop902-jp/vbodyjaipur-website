import heroBus from "../assets/images/hero-bus.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBus})` }}
    >
      <div className="hero-overlay">
        <div className="container">

          <div className="hero-content">

            <span className="hero-tag">
              Premium Bus Body Builders
            </span>

            <h1>
              Premium Bus Body <br />
              Manufacturing & Design Solutions
            </h1>

            <p>
              Vishwakarma Body Builders specializes in Luxury Coaches,
              School Buses, Staff Buses, AC/Non-AC Buses and Customized
              Bus Body Manufacturing with superior quality and safety.
            </p>

            <div className="hero-buttons">

              <Link
                to="/contact"
                className="btn btn-warning btn-lg">
                Get Quote
              </Link>

              <a
                href="tel:+919660244357"
                className="btn btn-outline-light btn-lg">
                Call Now
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;