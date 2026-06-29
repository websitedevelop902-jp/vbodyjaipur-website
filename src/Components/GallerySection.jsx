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

const videos = [vbus, vbus2, vbus3, vbus4, vbus5, vbus6];
function GallerySection() {
  return (
    <section className="container py-5">
      <h2 className="text-center fw-bold mb-5">
        Our Completed Projects
        Premium Bus Manufacturing Portfolio
      </h2>

      <div className="row g-4">

        {[, bus2, bus4, bus5, bus6].map((img, index) => (
          <div className="col-md-3" key={index}>
            <img
              src={img}
              alt="Bus"
              className="gallery-img shadow"
            />
          </div>
        ))}
        <div className="row g-4 mt-4">

          {videos.map((video, index) => (
            <div className="col-md-6" key={index}>
              <video
                controls
                className="gallery-video"
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default GallerySection;