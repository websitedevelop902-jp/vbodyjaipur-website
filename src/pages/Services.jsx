import Navbar from "../Components/Navbar";
import Services from "../Components/Services";
import Footer from "../Components/Footer";
import { useEffect } from "react";

function ServicesPage() {
  useEffect(() => {
    document.title =
      "Our Services | Vishwakarma Body Builders Jaipur";
  }, []);
  return (
    <>
      <Navbar />
      <Services />
      <Footer />
    </>
  );
}

export default ServicesPage;