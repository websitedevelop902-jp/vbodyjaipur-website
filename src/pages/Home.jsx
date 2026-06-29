import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutSection from "../Components/AboutSection";
import Services from "../Components/Services";
import WhyChooseUs from "../Components/WhyChooseUs";
import GallerySection from "../Components/GallerySection";
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
      <ContactCTA />
      <Footer />
    </>
  );
}

export default Home;