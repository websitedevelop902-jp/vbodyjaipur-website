import {
  FaShieldAlt,
  FaTools,
  FaUsers,
  FaClock,
  FaRupeeSign,
  FaHeadset,
} from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Premium Quality",
      text: "High-quality materials and durable bus body manufacturing."
    },
    {
      icon: <FaTools />,
      title: "Custom Design",
      text: "Customized bus body solutions according to customer requirements."
    },
    {
      icon: <FaUsers />,
      title: "Experienced Team",
      text: "Skilled engineers and fabricators with years of experience."
    },
    {
      icon: <FaClock />,
      title: "On-Time Delivery",
      text: "Projects completed and delivered within the committed timeline."
    },
    {
      icon: <FaRupeeSign />,
      title: "Competitive Pricing",
      text: "Affordable pricing without compromising on quality."
    },
    {
      icon: <FaHeadset />,
      title: "Customer Support",
      text: "Dedicated support before and after project completion."
    },
  ];

  return (
    <section className="why-section">
      <div className="container">

        <div className="section-title">
          <span>WHY CHOOSE US</span>
          <h2>Trusted Bus Body Manufacturer in Jaipur</h2>
          <p>
            We manufacture luxury coaches, school buses, sleeper buses,
            and customized bus body solutions with premium quality and
            timely delivery.
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