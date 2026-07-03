import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import hero4 from "../assets/images/bus6.jpg";
import hero1 from "../assets/images/hero-bus.jpg";
import hero2 from "../assets/images/bus4.jpg";
import hero3 from "../assets/images/bus5.jpg";


function Hero() {

  const images = [hero4, hero2, hero3, hero1];

  const texts = [
    "Luxury Coach Builders",
    "School Bus Manufacturing",
    "Sleeper Bus Fabrication",
    "Custom Bus Body Solutions",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {

    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);

    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2500);

    return () => {
      clearInterval(imageInterval);
      clearInterval(textInterval);
    };

  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      <div className="hero-overlay">

        <div className="container">

          <div className="hero-content">

            <span className="hero-tag">
              Premium Bus Body Builders
            </span>

            <h1>
              Premium Bus Body
              <br />
              Manufacturing & Design Solutions
            </h1>

            <p className="hero-text">
              {texts[currentText]}
            </p>

            <div className="hero-buttons">

              <Link
                to="/contact"
                className="btn btn-warning btn-lg"
              >
                Get Quote
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;