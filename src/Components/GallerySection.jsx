import { Link } from "react-router-dom";
import bus2 from "../assets/images/bus2.jpg";
import bus4 from "../assets/images/bus4.jpg";
import bus5 from "../assets/images/bus5.jpg";
import bus6 from "../assets/images/bus6.jpg";
import vbus from "../assets/images/videos/vbus.mp4";
import vbus2 from "../assets/images/videos/vbus2.mp4";
import vbus3 from "../assets/images/videos/vbus3.mp4";
import vbus4 from "../assets/images/videos/vbus4.mp4";
import vbus5 from "../assets/images/videos/vbus5.mp4";
import vbus6 from "../assets/images/videos/vbus6.mp4";

const images = [bus2, bus4, bus5, bus6];
const videos = [vbus, vbus2, vbus3, vbus4, vbus5, vbus6];

function GallerySection() {
  return (
    <section className="gallery-section">

      <div className="container">

        <div className="section-heading">

          <span>OUR GALLERY</span>

          <h2>
            Completed Bus Body Projects
          </h2>

          <p>
            Explore our premium bus body manufacturing,
            fabrication and customized transportation projects.
          </p>

        </div>

        <div className="row">

          {images.map((img, index) => (

            <div className="col-lg-3 col-md-6 mb-4" key={index}>

              <div className="gallery-card">

                <img
                  src={img}
                  alt="Luxury Bus Body Builder in Jaipur"
                />

                <div className="gallery-overlay">

                  <Link
                    to="/gallery"
                    className="btn btn-warning"
                  >
                    View Gallery
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

        <div className="row mt-5">

          {videos.map((video, index) => (

            <div className="col-lg-4 col-md-6 mb-4" key={index}>

              <video
                controls
                className="gallery-video"
              >
                <source
                  src={video}
                  type="video/mp4"
                />
              </video>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default GallerySection;