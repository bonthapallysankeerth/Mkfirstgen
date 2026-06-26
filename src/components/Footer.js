import React from "react";
import logo from "../assets/images/academy-logo.png";
import { Award, ArrowUp } from "lucide-react";

function Footer() {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-cricket-dark border-t border-white/5 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Logo and brand name column */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                className="h-12 w-auto object-contain drop-shadow-[0_0_6px_rgba(212,175,55,0.3)]"
                alt="MR Firstgen Logo"
              />
              <div className="flex flex-col items-start leading-none">
                <span className="font-outfit font-black text-lg tracking-wider text-white">
                  MR FIRSTGEN
                </span>
                <span className="font-sans font-bold text-[10px] tracking-[0.25em] text-cricket-gold uppercase">
                  Cricket Academy
                </span>
              </div>
            </div>
            
            <p className="font-sans text-xs sm:text-sm text-gray-400 font-semibold italic mt-4 max-w-xs">
              "Dream • Train • Achieve"
            </p>
            
            <p className="text-[11px] text-gray-500 mt-2 max-w-sm">
              Premium sports facility focused on building skills, fitness, discipline, and building future stars of cricket in Hyderabad.
            </p>
          </div>

          {/* Quick links columns */}
          <div className="md:col-span-4 flex flex-col items-center justify-center">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm text-gray-400 font-medium font-sans">
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, "#about")} className="hover:text-cricket-gold transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#programs" onClick={(e) => handleLinkClick(e, "#programs")} className="hover:text-cricket-gold transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#coaches" onClick={(e) => handleLinkClick(e, "#coaches")} className="hover:text-cricket-gold transition-colors">
                  Coaches
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => handleLinkClick(e, "#pricing")} className="hover:text-cricket-gold transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")} className="hover:text-cricket-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>

            {/* Social media icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="#facebook"
                aria-label="Facebook link"
                className="p-2 rounded-full bg-white/5 border border-white/5 hover:border-cricket-gold text-gray-400 hover:text-cricket-gold hover:scale-105 transition-all flex items-center justify-center"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V1H13c-3 0-5 2-5 5v2z" />
                </svg>
              </a>
              <a
                href="#instagram"
                aria-label="Instagram link"
                className="p-2 rounded-full bg-white/5 border border-white/5 hover:border-cricket-gold text-gray-400 hover:text-cricket-gold hover:scale-105 transition-all flex items-center justify-center"
              >
                <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#youtube"
                aria-label="Youtube link"
                className="p-2 rounded-full bg-white/5 border border-white/5 hover:border-cricket-gold text-gray-400 hover:text-cricket-gold hover:scale-105 transition-all flex items-center justify-center"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.388.555a3.002 3.002 0 0 0-2.11 2.108C0 8.03 0 12 0 12s0 3.97.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.48 20.5 12 20.5 12 20.5s7.52 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.97 24 12 24 12s0-3.97-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Back to top column */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end">
            <button
              onClick={handleScrollToTop}
              className="p-3.5 rounded-full border border-white/10 hover:border-cricket-gold bg-white/5 hover:bg-cricket-gold/10 text-gray-400 hover:text-cricket-gold transition-all duration-300 group shadow-lg"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider mt-3">Back to Top</span>
          </div>

        </div>

        <hr className="border-white/5 my-8" />

        {/* Footer bottom details */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 font-sans">
          <p>© {new Date().getFullYear()} MR Firstgen Cricket Academy. All rights reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0 font-medium">
            <a href="#terms" className="hover:underline">Terms of Service</a>
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;