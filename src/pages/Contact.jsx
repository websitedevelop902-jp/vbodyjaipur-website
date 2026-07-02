import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    document.title = "Contact Us | Vishwakarma Body Builders Jaipur";
  }, []);
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

        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully!",
          text: "Thank you for contacting Vishwakarma Body Builders.",
          confirmButtonColor: "#fbbf24",
          confirmButtonText: "OK",
        });

        e.target.reset();

      })
      .catch((error) => {

        console.log(error);

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to send message. Please try again.",
          confirmButtonColor: "#dc3545",
        });

      });
  };

  return (
    <>
      <Navbar />

      <section className="contact-page">

        <div className="container">

          <div className="section-heading">

            <span>CONTACT US</span>

            <h2>Let's Build Your Next Bus Together</h2>

            <p>
              Contact Vishwakarma Body Builders for premium bus body
              manufacturing, custom fabrication, luxury coaches,
              school buses and complete transportation solutions.
            </p>

          </div>

          <div className="contact-grid">

            {/* Left Side */}

            <div className="contact-info">

              <h3>Get In Touch</h3>

              <div className="info-box">

                <h5>📍 Address</h5>

                <p>
                  Anand Pur, Sikar Road,
                  Jaipur, Rajasthan
                </p>

              </div>

              <div className="info-box">

                <h5>📞 Phone</h5>

                <a href="tel:+919660244357">
                  +91 9660244357
                </a>

              </div>

              <div className="info-box">

                <h5>📧 Email</h5>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=vishwakarma.busbody@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  vishwakarma.busbody@gmail.com
                </a>

              </div>

              <div className="info-box">

                <h5>🕒 Working Hours</h5>

                <p>Monday - Saturday</p>

                <p>9:00 AM - 7:00 PM</p>

              </div>

              <div className="contact-buttons">

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=27.046062,75.806185"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-warning"
                >
                  📍 Get Directions
                </a>

                <a
                  href="https://wa.me/919660244357"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-success"
                >
                  WhatsApp Us
                </a>

              </div>

            </div>

            {/* Right Side */}

            <div className="contact-form-box">

              <h3>Send Inquiry</h3>

              <form
                ref={form}
                onSubmit={sendEmail}
              >

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
                  rows="6"
                  placeholder="Write your message..."
                  className="form-control mb-3"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="btn btn-warning w-100"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

          {/* Google Map */}

          <div className="contact-map">

            <h2>Our Location</h2>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.492411047689!2d75.80446447381982!3d27.046200876567877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396daf00492ae0f5%3A0xade8cd6de6a6d98e!2sAnand%20pur!5e0!3m2!1sen!2sin!4v1782753369984!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{
                border: 0,
                borderRadius: "20px"
              }}
              loading="lazy"
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