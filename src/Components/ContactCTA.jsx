import { Link } from "react-router-dom";

function ContactCTA() {
  return (
    <section className="cta-section">

      <div className="container">

        <div className="cta-box">

          <span className="section-tag">
            GET IN TOUCH
          </span>

          <h2>
            Looking for Premium Bus Body Manufacturing?
          </h2>

          <p>
            Contact Vishwakarma Body Builders today for luxury coaches,
            school buses, staff buses and customized bus body solutions.
          </p>

          <div className="cta-buttons">

            <Link
              to="/contact"
              className="btn btn-warning btn-lg"
            >
              Get Quote
            </Link>

            <a
              href="tel:+919660244357"
              className="btn btn-outline-light btn-lg"
            >
              Call Now
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactCTA;