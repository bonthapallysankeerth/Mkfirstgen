import React from "react";
import logo from "../assets/images/academy-logo.png";
import { ArrowUp } from "lucide-react";

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

          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">

            <div className="flex items-center gap-3">
              <img
                src={logo}
                className="h-12 w-auto object-contain"
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

            <p className="font-sans text-xs sm:text-sm text-gray-400 font-semibold italic mt-4">
              "Dream • Train • Achieve"
            </p>

            <p className="text-[11px] text-gray-500 mt-2 max-w-sm">
              Premium sports facility focused on building skills, fitness,
              discipline, and future stars of cricket in Hyderabad.
            </p>

          </div>


          <div className="md:col-span-4 flex flex-col items-center justify-center">

            <ul className="flex flex-wrap justify-center gap-6 text-xs text-gray-400">

              <li>
                <a href="#about"
                  onClick={(e)=>handleLinkClick(e,"#about")}>
                  About
                </a>
              </li>

              <li>
                <a href="#programs"
                  onClick={(e)=>handleLinkClick(e,"#programs")}>
                  Programs
                </a>
              </li>

              <li>
                <a href="#coaches"
                  onClick={(e)=>handleLinkClick(e,"#coaches")}>
                  Coaches
                </a>
              </li>

              <li>
                <a href="#pricing"
                  onClick={(e)=>handleLinkClick(e,"#pricing")}>
                  Pricing
                </a>
              </li>

              <li>
                <a href="#contact"
                  onClick={(e)=>handleLinkClick(e,"#contact")}>
                  Contact
                </a>
              </li>

            </ul>


            <div className="flex gap-4 mt-6">

              <a href="#facebook"
              className="p-2 rounded-full bg-white/5 text-gray-400">
                Facebook
              </a>

              <a href="#instagram"
              className="p-2 rounded-full bg-white/5 text-gray-400">
                Instagram
              </a>

              <a href="#youtube"
              className="p-2 rounded-full bg-white/5 text-gray-400">
                Youtube
              </a>

            </div>

          </div>


          <div className="md:col-span-3 flex flex-col items-center">

            <button
              onClick={handleScrollToTop}
              className="p-3 rounded-full border border-white/10 text-gray-400 hover:text-cricket-gold"
            >

              <ArrowUp className="w-5 h-5"/>

            </button>

            <span className="text-xs text-gray-500 mt-3">
              Back To Top
            </span>

          </div>


        </div>


        <hr className="border-white/5 my-8"/>


        <div className="text-center text-xs text-gray-500">

          © {new Date().getFullYear()} MR Firstgen Cricket Academy.
          All rights reserved.

        </div>


      </div>

    </footer>
  );
}


export default Footer;