import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutSection from "../Components/AboutSection";
import Services from "../Components/Services";
import WhyChooseUs from "../Components/WhyChooseUs";
import GallerySection from "../Components/GallerySection";
import ProcessSection from "../Components/ProcessSection";
import ContactCTA from "../Components/ContactCTA";
import Footer from "../Components/Footer";
import { useEffect } from "react";
function Home() {
  useEffect(() => {
    document.title =
      "Vishwakarma Body Builders Jaipur | Luxury Bus Body Builders";
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <Services />
      <WhyChooseUs />
      <GallerySection showButton={true} />
      <ProcessSection />
      <ContactCTA />
      <Footer />
    </>
  );
}

export default Home;