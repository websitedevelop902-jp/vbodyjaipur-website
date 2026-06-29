import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Process() {
  const processSteps = [
    {
      title: "Requirement Discussion",
      desc: "Understanding customer needs, bus type, seating capacity and customization requirements."
    },
    {
      title: "Design & Planning",
      desc: "Preparing detailed layouts, structure planning and design approval."
    },
    {
      title: "Fabrication",
      desc: "High-quality body frame manufacturing using advanced fabrication techniques."
    },
    {
      title: "Interior & Finishing",
      desc: "Installation of seats, lighting, flooring, AC ducts and premium interior work."
    },
    {
      title: "Quality Inspection",
      desc: "Safety checks, durability testing and quality assurance before delivery."
    },
    {
      title: "Delivery",
      desc: "Final inspection and delivery of the completed vehicle to the client."
    }
  ];

  return (
    <>
      <Navbar />

      <section className="process-page">
        <div className="container">

          <h1 className="process-heading">
            Our Manufacturing Process
          </h1>

          <p className="process-subtitle">
            From concept to completion, every bus is crafted with
            precision, quality and attention to detail.
          </p>

          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div className="process-card" key={index}>
                <div className="step-number">
                  {index + 1}
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