import heroBus from "../assets/images/hero-bus.jpg";

import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero"
      style={{ backgroundImage: `url(${heroBus})` }}>
      <div className="hero-overlay">
        <div className="container text-center">

          <h1>
            Premium Bus Body Manufacturing & Design Solutions
          </h1>

          <p>
            Luxury Coaches • Sleeper AC Buses • School Buses • AC/Non-AC Buses • Custom Bus Body Fabrication
          </p>

          <Link
            to="/contact"
            className="btn btn-warning btn-lg mt-3"
          >
            Get Quote
          </Link>

        </div>
      </div>
    </section>
  );
}

export default Hero;