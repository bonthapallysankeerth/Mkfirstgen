import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Trophy } from "lucide-react";

function CTASection() {
  const handleScrollTo = (id) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-r from-cricket-pitch to-cricket-emerald/40 border-y border-white/5">
      {/* Cinematic Radial Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 bg-cricket-vibrant/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 h-48 bg-cricket-gold/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Glow Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-cricket-gold/15 border border-cricket-gold/30 text-cricket-gold text-[10px] font-outfit font-black tracking-widest uppercase mb-6"
        >
          <Trophy className="w-3.5 h-3.5" />
          Enroll for 2026 Season
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-outfit font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none mb-4"
        >
          ADMISSIONS ARE OPEN NOW
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans font-semibold text-lg sm:text-xl text-cricket-vibrant mb-8 tracking-wide"
        >
          Start Your Cricket Journey Today
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full"
        >
          {/* Action button */}
          <button
            onClick={() => handleScrollTo("#contact")}
            className="px-8 py-4 w-full sm:w-auto rounded-full bg-gradient-to-r from-cricket-gold to-cricket-golddark text-black font-outfit font-black text-sm tracking-wider uppercase shadow-[0_4px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-1.5"
          >
            Apply Online
            <ChevronRight className="w-4.5 h-4.5 stroke-[3]" />
          </button>

          {/* Secondary Button */}
          <button
            onClick={() => handleScrollTo("#pricing")}
            className="px-8 py-4 w-full sm:w-auto rounded-full border border-white/10 hover:border-cricket-gold bg-white/5 hover:bg-cricket-gold/5 text-white hover:text-cricket-gold font-outfit font-bold text-sm tracking-wider uppercase transition-all duration-300"
          >
            View Pricing
          </button>
        </motion.div>

        {/* Brief sub-label info */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[10px] text-gray-400 mt-6 tracking-wide font-medium"
        >
          * Limited slots available for weekend training batches. Fast track selection open.
        </motion.p>

      </div>
    </section>
  );
}

export default CTASection;
