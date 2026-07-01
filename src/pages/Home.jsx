import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutSection from "../Components/AboutSection";
import Services from "../Components/Services";
import WhyChooseUs from "../Components/WhyChooseUs";
import GallerySection from "../Components/GallerySection";
import ProcessSection from "../Components/ProcessSection";
import ContactCTA from "../Components/ContactCTA";
import Footer from "../Components/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <Services />
      <WhyChooseUs />
      <GallerySection />
      <ProcessSection />
      <ContactCTA />
      <Footer />
    </>
  );
}

export default Home;