function Services() {
  const services = [
    "🚌 Luxury Coach Building",
    "🏫 School Bus Manufacturing",
    "🚐 Staff Bus Body Building",
    "🔧 Bus Modification",
    "🛠 Custom Fabrication",
    "🚍 Tourist Bus Fabrication"
  ];
  

  return (
    <section className="container py-5">
      <h2 className="text-center mb-5">Our Services</h2>

      <div className="row">
        {services.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow h-100">
              <div className="card-body">
                <h5>{item}</h5>
                <p>
                  High quality manufacturing and design
                  solutions for transportation industry.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;