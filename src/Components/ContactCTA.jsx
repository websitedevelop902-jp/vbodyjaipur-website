import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="container text-center">
        <h2>Need a Custom Bus Body Design?</h2>

        <p>
          Contact Vishwakarma Body Builders for premium luxury coaches,
          sleeper buses, school buses and custom bus body fabrication.
        </p>

        <div className="cta-buttons">
          <a href="tel:+919660244357" className="call-btn">
            <FaPhoneAlt /> Call Now
          </a>

          <a
            href="https://wa.me/+919660244357"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;