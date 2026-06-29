import { Link } from "react-router-dom";
import bus1 from "../assets/images/bus5.jpg";
import bus2 from "../assets/images/bus6.jpg";
import bus3 from "../assets/images/bus4.jpg";

function AboutSection() {
  return (
    <section className="container py-5">
      <div className="row align-items-center">

        <div className="col-md-6">
          <span className="text-warning fw-bold">ABOUT US</span>

          <h2 className="fw-bold mb-4">
            Building Premium Bus Bodies With Excellence Since 2000
          </h2>

          <p>
            Vishwakarma Body Builders is one of the leading bus body manufacturing
            companies in Jaipur, Rajasthan, with over 25 years of experience in
            designing, fabricating, and delivering premium-quality bus body solutions.
            We are committed to providing innovative, durable, and reliable vehicles
            that meet the highest industry standards.
          </p>

          <p>
            Our expertise covers a wide range of bus body manufacturing services,
            including luxury sleeper coaches, school buses, staff buses, tourist buses,
            AC and non-AC buses, and fully customized transportation solutions. Every
            vehicle is designed with precision and built using high-quality materials
            to ensure safety, comfort, and long-lasting performance.
          </p>

          <p>
            At Vishwakarma Body Builders, we believe that quality workmanship and
            customer satisfaction are the foundations of our success. Our skilled team
            of engineers, designers, welders, and technicians work together to create
            vehicles that combine functionality, aesthetics, and durability.
          </p>

          <p>
            From concept and design to fabrication, painting, interior finishing, and
            final quality inspection, every stage of the manufacturing process is
            carefully monitored. This attention to detail enables us to consistently
            deliver products that exceed customer expectations.
          </p>

          <p>
            Over the years, we have successfully completed hundreds of projects for
            private operators, educational institutions, corporate organizations, and
            government sectors. Our dedication to excellence has earned us the trust
            of clients across Rajasthan and other states of India.
          </p>

          <p>
            We continuously invest in modern manufacturing techniques, advanced tools,
            and skilled manpower to stay ahead in the industry. Our goal is not only
            to manufacture buses but also to provide transportation solutions that are
            safe, efficient, and tailored to the unique requirements of every client.
          </p>

          <div className="mt-5">
            <h3 className="fw-bold">Our Mission</h3>
            <p>
              To deliver world-class bus body manufacturing solutions that prioritize
              safety, quality, innovation, and customer satisfaction.
            </p>

            <h3 className="fw-bold mt-4">Our Vision</h3>
            <p>
              To become one of India's most trusted and respected bus body
              manufacturing companies through continuous improvement and excellence.
            </p>
          </div>



          {/* <Link
            to="/contact"
            className="btn btn-warning mt-3 px-4"
          >
            Contact Us
          </Link> */}
        </div>

        <div className="col-lg-5">
          <div className="about-gallery">

            <img
              src={bus1}
              alt="Bus"
              className="img-large"
            />

            <img
              src={bus2}
              alt="Bus"
              className="img-medium"
            />

            <img
              src={bus3}
              alt="Bus"
              className="img-small"
            />

          </div>
        </div>
        <div className="row text-center mt-4">
          <div className="col-3">
            <h3 className="text-warning">25+</h3>
            <small>Years</small>
          </div>

          <div className="col-3">
            <h3 className="text-warning">500+</h3>
            <small>Projects</small>
          </div>

          <div className="col-3">
            <h3 className="text-warning">100+</h3>
            <small>Clients</small>
          </div>

          <div className="col-3">
            <h3 className="text-warning">24/7</h3>
            <small>Support</small>
          </div>
        </div>

      </div>



    </section>
  );
}

export default AboutSection;