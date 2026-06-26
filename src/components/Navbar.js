import React, { useState, useEffect } from "react";
import logo from "../assets/images/academy-logo.png";
import { Menu, X, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Coaches", href: "#coaches" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-panel py-3 shadow-lg shadow-black/30 border-b border-cricket-gold/25"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Academy Title */}
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, "#home")}
              className="flex items-center gap-3 group"
            >
              <img
                src={logo}
                className="h-14 w-auto object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] transition-transform duration-300 group-hover:scale-105"
                alt="MR Firstgen Cricket Academy Logo"
              />
              <div className="flex flex-col justify-center leading-none">
                <span className="font-outfit font-black text-xl tracking-wider text-white group-hover:text-cricket-gold transition-colors duration-300">
                  MR FIRSTGEN
                </span>
                <span className="font-sans font-bold text-xs tracking-[0.25em] text-cricket-gold uppercase">
                  Cricket Academy
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="font-outfit font-medium text-[15px] tracking-wide text-gray-200 hover:text-cricket-gold transition-all duration-300 relative py-2 group"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cricket-gold transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* CTA Booking Button */}
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-cricket-gold text-white font-outfit font-semibold text-sm tracking-wide bg-gradient-to-r hover:bg-cricket-gold hover:text-black hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300 group"
              >
                <Calendar className="w-4 h-4 text-cricket-gold group-hover:text-black transition-colors" />
                Book Free Trial
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-white hover:text-cricket-gold focus:outline-none transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden glass-panel border-b border-cricket-gold/25"
            >
              <div className="px-4 pt-2 pb-6 space-y-4 shadow-xl">
                <ul className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className="block px-3 py-2.5 rounded-md font-outfit font-semibold text-lg text-gray-200 hover:bg-cricket-emerald hover:text-cricket-gold transition-all duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <a
                    href="#contact"
                    onClick={(e) => handleLinkClick(e, "#contact")}
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full border border-cricket-gold bg-cricket-gold/10 text-white hover:bg-cricket-gold hover:text-black font-outfit font-bold text-base transition-all duration-300"
                  >
                    <Calendar className="w-5 h-5 text-cricket-gold hover:text-black" />
                    Book Free Trial
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

export default Navbar;