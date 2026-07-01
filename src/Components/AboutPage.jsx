import bus1 from "../assets/images/bus5.jpg";
import bus2 from "../assets/images/bus6.jpg";
import bus3 from "../assets/images/bus4.jpg";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <>

      {/* Hero Banner */}

      <section className="about-banner">

        <div className="about-banner-overlay">

          <div className="container">

            <span>ABOUT US</span>

            <h1>
              Building Premium Bus Bodies
              Since 2000
            </h1>

            <p>
              Delivering Quality, Safety and Innovation
              for more than 25 Years.
            </p>

          </div>

        </div>

      </section>

      {/* Company Story */}

      <section className="about-company">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <img
                src={bus1}
                className="about-company-img"
                alt=""
              />

            </div>

            <div className="col-lg-6">

              <span className="section-tag">
                OUR STORY
              </span>

              <h2>
                Trusted Bus Body Manufacturer
                in Rajasthan
              </h2>

              <p>

                Vishwakarma Body Builders is one of Jaipur's
                leading bus body manufacturers with more than
                25 years of experience.

              </p>

              <p>

                We manufacture Luxury Coaches,
                School Buses,
                Staff Buses,
                Tourist Coaches,
                Sleeper Buses
                and Customized Bus Bodies.

              </p>

              <p>

                Every vehicle is manufactured
                with premium quality material,
                advanced fabrication technology
                and strict quality inspection.

              </p>

              <Link
                to="/contact"
                className="btn btn-warning mt-4"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* Mission & Vision */}

      <section className="mission-section">

        <div className="container">

          <div className="section-heading">
            <span>OUR VALUES</span>
            <h2>Mission & Vision</h2>
          </div>

          <div className="row g-4">

            <div className="col-lg-6">

              <div className="mission-card">

                <h3>🎯 Our Mission</h3>

                <p>
                  To manufacture premium quality bus bodies using
                  modern technology while ensuring safety,
                  durability and complete customer satisfaction.
                </p>

              </div>

            </div>

            <div className="col-lg-6">

              <div className="mission-card">

                <h3>👁️ Our Vision</h3>

                <p>
                  To become one of India's most trusted bus body
                  manufacturers by delivering innovative,
                  reliable and world-class transportation solutions.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="why-about">

        <div className="container">

          <div className="section-heading">

            <span>WHY CHOOSE US</span>

            <h2>Why Customers Trust Us</h2>

          </div>

          <div className="why-grid">

            <div className="why-card">
              <h4>🏆 25+ Years Experience</h4>
              <p>Trusted expertise in premium bus body manufacturing.</p>
            </div>

            <div className="why-card">
              <h4>🛠 Modern Technology</h4>
              <p>Advanced fabrication techniques for superior quality.</p>
            </div>

            <div className="why-card">
              <h4>✅ Quality Assurance</h4>
              <p>Every bus passes strict inspection before delivery.</p>
            </div>

            <div className="why-card">
              <h4>👨‍🔧 Skilled Team</h4>
              <p>Experienced engineers and technicians.</p>
            </div>

            <div className="why-card">
              <h4>🚍 Custom Design</h4>
              <p>Manufacturing according to customer requirements.</p>
            </div>

            <div className="why-card">
              <h4>🤝 Customer Satisfaction</h4>
              <p>Long-term relationships built on trust and quality.</p>
            </div>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="company-stats">

        <div className="container">

          <div className="stat-grid">

            <div className="stat-box">
              <h2>25+</h2>
              <p>Years Experience</p>
            </div>

            <div className="stat-box">
              <h2>500+</h2>
              <p>Completed Projects</p>
            </div>

            <div className="stat-box">
              <h2>120+</h2>
              <p>Happy Clients</p>
            </div>

            <div className="stat-box">
              <h2>100%</h2>
              <p>Quality Assurance</p>
            </div>

          </div>

        </div>

      </section>

      {/* Factory Gallery */}

      <section className="factory-gallery">

        <div className="container">

          <div className="section-heading">

            <span>OUR WORK</span>

            <h2>Manufacturing Gallery</h2>

            <p>
              A glimpse of our premium bus body manufacturing,
              fabrication and finishing work.
            </p>

          </div>

          <div className="gallery-grid">

            <img src={bus1} alt="Bus" />

            <img src={bus2} alt="Bus" />

            <img src={bus3} alt="Bus" />

            <img src={bus2} alt="Bus" />

            <img src={bus3} alt="Bus" />

            <img src={bus1} alt="Bus" />

          </div>

        </div>

      </section>


      {/* Call To Action */}

      <section className="about-cta">

        <div className="container">

          <h2>
            Ready To Build Your Dream Bus?
          </h2>

          <p>
            Contact Vishwakarma Body Builders today for
            premium bus body manufacturing solutions.
          </p>

          <div className="cta-buttons">

            <Link
              to="/contact"
              className="btn btn-warning btn-lg"
            >
              Get Free Quote
            </Link>

            <a
              href="tel:+919660244357"
              className="btn btn-outline-light btn-lg"
            >
              Call Now
            </a>

          </div>

        </div>

      </section>

    </>
  );
}

export default AboutPage;