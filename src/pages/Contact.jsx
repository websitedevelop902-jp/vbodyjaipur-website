import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


function Contact() {
  return (
    <>
      <Navbar />

      <section className="contact-page">
        <div className="container">
          <h1 className="contact-heading">Contact Us</h1>

          <div className="contact-grid">

            <div className="contact-info">
              <h3>Get In Touch</h3>

              <p>
                📞{" "}
                <a href="tel:+919660244357">
                  +91 9660244357
                </a>
              </p>
              📧{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=vishwakarma.busbody@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                vishwakarma.busbody@gmail.com
              </a>

              <p>
                📍 Khasra No. 430-431, 436,
                Sevapura, New Transport Nagar,
                Jaipur, Rajasthan
              </p>

              <p>🕒 Mon - Sat : 9:00 AM - 7:00 PM</p>

              <a
                href="https://wa.me/919660244357"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success mt-3"
              >
                WhatsApp Us
              </a>
            </div>

            <div className="contact-form-box">
              <h3>Send Inquiry</h3>

              <form>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-control mb-3"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="form-control mb-3"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="form-control mb-3"
                />

                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="form-control mb-3"
                ></textarea>

                <button className="btn btn-warning">
                  Send Message
                </button>
              </form>
            </div>

          </div>

          <div className="map-section">
            <iframe
              title="location"
              src="https://maps.google.com/maps?q=Jaipur&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
            ></iframe>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;