import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e5j3gv6",
        "template_uay79vl",
        form.current,
        "Rxe4BJiBQRO3hFVQl"
      )
      .then(() => {
        alert("Message Sent Successfully!");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message.");
      });
  };

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
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=27.046062,75.806185"
                  className="btn btn-warning"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📍 Get Directions
                </a>
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

              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="form-control mb-3"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="form-control mb-3"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="form-control mb-3"
                  required
                />

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  className="form-control mb-3"
                  required
                ></textarea>

                <button type="submit" className="btn btn-warning">
                  Send Message
                </button>
              </form>
            </div>

          </div>

          <div className="contact-map">
            <h2>Our Location</h2>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.492411047689!2d75.80446447381982!3d27.046200876567877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396daf00492ae0f5%3A0xade8cd6de6a6d98e!2sAnand%20pur!5e0!3m2!1sen!2sin!4v1782753369984!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "10px" }}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              title="Google Map"
            />
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;