import Navbar from "../Components/Navbar";
import GallerySection from "../Components/GallerySection";
import Footer from "../Components/Footer";

function Gallery() {
  return (
    <>
      <Navbar />
      <GallerySection showButton={false} />
      <Footer />
    </>
  );
}

export default Gallery;