import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import TestimonialCarousel from "./components/TestimonialCarousel";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";
import ScrollToTop from "./components/ScrollToTop"; 
import HomeServiceDetails from "./components/HomeServiceDetails";
import OfficeServiceDetails from "./components/OfficeServiceDetails";
import FactoryServiceDetails from "./components/FactoryServiceDetails";
import WhatWeRectify from "./components/WhatWeRectify";
import VastuMedia from './components/VastuMedia';


function App() {
  return (
    <Router>
      <Navbar />
      <FloatingButton />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <AboutSection />
              <WhatWeRectify/>
              <ServicesSection />
              <TestimonialCarousel />
              <Footer />
            </>
          }
        />
        <Route path="/services/home" element={<HomeServiceDetails />} />
        <Route path="/services/office" element={<OfficeServiceDetails />} />
        <Route path="/services/factory" element={<FactoryServiceDetails />} />
        <Route path="/media" element={<VastuMedia />} />
      </Routes>
    </Router>
  );
}

export default App;
