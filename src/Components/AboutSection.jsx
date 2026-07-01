import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaAward,
  FaTools,
  FaUsers,
} from "react-icons/fa";

import bus1 from "../assets/images/bus5.jpg";
import bus2 from "../assets/images/bus6.jpg";
import bus3 from "../assets/images/bus4.jpg";

function AboutSection() {
  return (
    <section className="about-home">
      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-6">

            <div className="about-images">

              <img
                src={bus1}
                alt="Bus"
                className="about-img-large"
              />

              <div className="experience-box">
                <h2>25+</h2>
                <p>Years Experience</p>
              </div>

              <div className="about-small-images">

                <img
                  src={bus2}
                  alt="Bus"
                />

                <img
                  src={bus3}
                  alt="Bus"
                />

              </div>

            </div>

          </div>

          <div className="col-lg-6">

            <span className="section-tag">
              ABOUT US
            </span>

            <h2 className="about-title">
              Building Premium Bus Bodies Since 2000
            </h2>

            <p className="about-text">
              Vishwakarma Body Builders is one of Jaipur's leading bus body
              manufacturers with more than 25 years of experience in designing
              and building premium quality buses for schools, corporate,
              tourism and public transport.
            </p>

            <p className="about-text">
              Every vehicle is manufactured with modern technology,
              skilled craftsmanship and strict quality inspection
              to ensure maximum safety, durability and customer satisfaction.
            </p>

            <div className="about-features">

              <div>
                <FaCheckCircle />
                Premium Quality Materials
              </div>

              <div>
                <FaAward />
                25+ Years Experience
              </div>

              <div>
                <FaTools />
                Custom Manufacturing
              </div>

              <div>
                <FaUsers />
                Skilled Professional Team
              </div>

            </div>

            <Link
              to="/about"
              className="btn btn-warning mt-4 px-4"
            >
              Learn More
            </Link>

          </div>

        </div>

        <div className="about-stats">

          <div className="stat-card">
            <h2>25+</h2>
            <p>Years Experience</p>
          </div>

          <div className="stat-card">
            <h2>500+</h2>
            <p>Projects Completed</p>
          </div>

          <div className="stat-card">
            <h2>120+</h2>
            <p>Happy Clients</p>
          </div>

          <div className="stat-card">
            <h2>100%</h2>
            <p>Quality Assurance</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutSection;