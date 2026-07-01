import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import ScrollToTop from "./Components/ScrollToTop";
import ScrollTopButton from "./Components/ScrollTopButton";
import { useState, useEffect } from "react";
import Loader from "./Components/Loader";
import { FaWhatsapp } from "react-icons/fa";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/process" element={<Process />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <ScrollTopButton />
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919660244357"
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp />
      </a>

    </BrowserRouter>
  );
}

export default App;