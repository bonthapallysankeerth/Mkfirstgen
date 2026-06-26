import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Coaches from "./components/Coaches";
import Pricing from "./components/Pricing";
import CTASection from "./components/CTASection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-cricket-dark text-gray-200 min-h-screen font-sans selection:bg-cricket-gold selection:text-black">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Hero Showcase with Animations */}
      <Hero />

      {/* About Section - Core Values & Founders */}
      <About />

      {/* Curriculum & Training Programs */}
      <Programs />

      {/* Founders & Coaches Profile Showcase */}
      <Coaches />

      {/* Pricing Packages & Fees */}
      <Pricing />

      {/* Enrollment Call to Action */}
      <CTASection />

      {/* Location, Contact, and WhatsApp support */}
      <Contact />

      {/* Footer Branding & Links */}
      <Footer />
    </div>
  );
}

export default App;