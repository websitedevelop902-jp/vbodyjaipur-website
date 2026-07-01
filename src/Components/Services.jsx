import { Link } from "react-router-dom";

import bus1 from "../assets/images/bus1.jpg";
import bus2 from "../assets/images/bus2.jpg";
import bus3 from "../assets/images/bus3.jpg";
import bus4 from "../assets/images/bus4.jpg";
import bus5 from "../assets/images/bus5.jpg";
import bus6 from "../assets/images/bus6.jpg";

function Services() {

  const services = [

    {
      title: "Luxury Coach",
      image: bus1,
      text: "Premium luxury coach body manufacturing with modern interiors."
    },

    {
      title: "School Bus",
      image: bus2,
      text: "Safe and durable school bus body manufacturing."
    },

    {
      title: "Staff Bus",
      image: bus3,
      text: "Comfortable staff transportation bus solutions."
    },

    {
      title: "Bus Modification",
      image: bus4,
      text: "Professional bus modification and renovation."
    },

    {
      title: "Custom Fabrication",
      image: bus5,
      text: "Customized fabrication according to client requirements."
    },

    {
      title: "Tourist Bus",
      image: bus6,
      text: "Luxury tourist buses with premium finishing."
    }

  ];

  return (

    <section className="services-section">

      <div className="container">

        <div className="section-heading">

          <span>OUR SERVICES</span>

          <h2>
            Premium Bus Body Manufacturing Services
          </h2>

          <p>
            We provide complete bus body manufacturing and
            custom fabrication solutions with premium quality.
          </p>

        </div>

        <div className="row">

          {services.map((item, index) => (

            <div className="col-lg-4 col-md-6 mb-4" key={index}>

              <div className="service-card">

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="service-overlay">

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Services;