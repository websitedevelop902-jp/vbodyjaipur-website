import {
  FaShieldAlt,
  FaTools,
  FaUsersCog,
  FaClock,
  FaHandshake,
  FaAward,
} from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Premium Quality",
      text: "We use high-quality materials to build durable and reliable bus bodies."
    },
    {
      icon: <FaTools />,
      title: "Custom Design",
      text: "Customized bus body solutions according to customer requirements."
    },
    {
      icon: <FaUsersCog />,
      title: "Experienced Team",
      text: "Highly skilled professionals with years of manufacturing experience."
    },
    {
      icon: <FaClock />,
      title: "On-Time Delivery",
      text: "We always complete projects within the promised timeline."
    },
    {
      icon: <FaHandshake />,
      title: "Trusted Service",
      text: "Customer satisfaction and long-term relationships are our priority."
    },
    {
      icon: <FaAward />,
      title: "Best Workmanship",
      text: "Modern manufacturing techniques with attention to every detail."
    },
  ];

  return (
    <section className="why-section">
      <div className="container">

        <div className="section-heading">
          <span>WHY CHOOSE US</span>

          <h2>
            Why Customers Trust
            <br />
            Vishwakarma Body Builders
          </h2>

          <p>
            We manufacture premium quality bus bodies with modern technology,
            skilled craftsmanship and timely delivery for every customer.
          </p>
        </div>

        <div className="why-grid">
          {features.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">
                {item.icon}
              </div>

              <h4>{item.title}</h4>

              <p>{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;