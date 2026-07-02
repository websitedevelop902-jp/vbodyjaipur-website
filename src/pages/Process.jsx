import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {
  FaClipboardList,
  FaDraftingCompass,
  FaTools,
  FaCouch,
  FaCheckCircle,
  FaTruck,
} from "react-icons/fa";
import { useEffect } from "react";

function Process() {
  useEffect(() => {
    document.title =
      "Manufacturing Process | Vishwakarma Body Builders Jaipur";
  }, []);
  const processSteps = [
    {
      icon: <FaClipboardList />,
      title: "Requirement Discussion",
      desc: "Understanding customer requirements, seating capacity and customization."
    },
    {
      icon: <FaDraftingCompass />,
      title: "Design & Planning",
      desc: "Preparing layouts, structure design and approval."
    },
    {
      icon: <FaTools />,
      title: "Fabrication",
      desc: "High-quality body frame manufacturing using modern technology."
    },
    {
      icon: <FaCouch />,
      title: "Interior & Finishing",
      desc: "Premium seats, flooring, lighting and finishing work."
    },
    {
      icon: <FaCheckCircle />,
      title: "Quality Inspection",
      desc: "Complete quality testing before vehicle delivery."
    },
    {
      icon: <FaTruck />,
      title: "Final Delivery",
      desc: "Safe delivery with complete customer satisfaction."
    }
  ];

  return (
    <>
      <Navbar />

      <section className="process-page">

        <div className="container">

          <div className="section-heading">

            <span>OUR PROCESS</span>

            <h2>How We Build Premium Bus Bodies</h2>

            <p>
              Every project follows a systematic manufacturing process
              to ensure quality, durability and customer satisfaction.
            </p>

          </div>

          <div className="process-grid">

            {processSteps.map((step, index) => (

              <div className="process-card" key={index}>

                <div className="step-number">
                  {index + 1}
                </div>

                <div className="process-icon">
                  {step.icon}
                </div>

                <h3>{step.title}</h3>

                <p>{step.desc}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Process;