import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import TestimonialCarousel from "./components/TestimonialCarousel";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";

// Import your new service detail pages
import HomeServiceDetails from "./components/HomeServiceDetails";
import OfficeServiceDetails from "./components/OfficeServiceDetails";
import FactoryServiceDetails from "./components/FactoryServiceDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <FloatingButton />
      <Routes>
        {/* Main Landing Page Route */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ServicesSection />
              <AboutSection />
              <TestimonialCarousel />
              <Footer />
            </>
          }
        />

        {/* New Service Detail Pages */}
        <Route path="/services/home" element={<HomeServiceDetails />} />
        <Route path="/services/office" element={<OfficeServiceDetails />} />
        <Route path="/services/factory" element={<FactoryServiceDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
