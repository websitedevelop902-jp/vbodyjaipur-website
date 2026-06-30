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
              Crafting Premium Bus Bodies
              <span> with Quality & Innovation</span>
            </h1>

            <p>
              Vishwakarma Body Builders specializes in Luxury Coaches,
              School Buses, Staff Buses, AC/Non-AC Buses and Customized
              Bus Body Manufacturing with superior quality and safety.
            </p>

            <div className="hero-buttons">

              <Link
                to="/contact"
                className="btn btn-warning btn-lg"
              >
                Get Quote
              </Link>

              <Link
                to="/services"
                className="btn btn-outline-light btn-lg"
              >
                Explore Services
              </Link>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;