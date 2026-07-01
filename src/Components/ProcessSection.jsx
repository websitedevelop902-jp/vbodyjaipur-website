import { Link } from "react-router-dom";

function ProcessSection() {

  const steps = [
    "Requirement Discussion",
    "Design & Planning",
    "Fabrication",
    "Interior & Finishing",
    "Quality Inspection",
    "Delivery"
  ];

  return (
    <section className="process-home">

      <div className="container">

        <div className="section-heading">
          <span>OUR PROCESS</span>

          <h2>How We Build Premium Bus Bodies</h2>

          <p>
            Every project follows a systematic manufacturing process
            to ensure quality, safety and customer satisfaction.
          </p>
        </div>

        <div className="process-home-grid">

          {steps.map((step, index) => (

            <div className="process-home-card" key={index}>

              <div className="process-circle">
                {index + 1}
              </div>

              <h4>{step}</h4>

            </div>

          ))}

        </div>

        <div className="text-center mt-5">

          <Link
            to="/process"
            className="btn btn-warning btn-lg"
          >
            View Complete Process
          </Link>

        </div>

      </div>

    </section>
  );
}

export default ProcessSection;