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

          <div className="contact-map">
            <h2>Our Location</h2>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3597.1201106608733!2d75.80398607125711!3d27.045291616909953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1782741109159!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "10px" }}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              title="Google Map"
            ></iframe>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;