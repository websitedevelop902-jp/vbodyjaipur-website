import Navbar from "../Components/Navbar";
import GallerySection from "../Components/GallerySection";
import Footer from "../Components/Footer";
import { useEffect } from "react";

function Gallery() {
  useEffect(() => {
    document.title = "Gallery | Vishwakarma Body Builders Jaipur";
  }, []);

  return (
    <>
      <Navbar />
      <GallerySection showButton={false} />
      <Footer />
    </>
  );
}

export default Gallery;