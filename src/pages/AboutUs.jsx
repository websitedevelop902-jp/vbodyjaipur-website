import Navbar from "../Components/Navbar";
import AboutPage from "../Components/AboutPage";
import Footer from "../Components/Footer";
import { useEffect } from "react";

function AboutUs() {
  useEffect(() => {
    document.title = "About Us | Vishwakarma Body Builders Jaipur";
  }, []);
  return (
    <>
      <Navbar />
      <AboutPage />
      <Footer />
    </>
  );
}

export default AboutUs;