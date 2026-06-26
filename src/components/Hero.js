import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Calendar, Award, Activity, ShieldCheck, Flame, Compass } from "lucide-react";

// Floating Gold Particles Component for Cinematic Atmosphere
const FloatingParticles = () => {
  const particles = Array.from({ length: 15 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-cricket-gold/30 rounded-full blur-[1px]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100 - Math.random() * 150],
            x: [0, (Math.random() - 0.5) * 60],
            opacity: [0.1, 0.7, 0],
            scale: [0.8, 1.2 + Math.random(), 0.5],
          }}
          transition={{
            duration: 6 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 6,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Animated Cricket Practice Silhouette SVGs
const PracticeAnimation = () => {
  return (
    <div className="relative w-full max-w-lg h-[400px] flex items-center justify-center">
      {/* Stadium Light Beam Effect */}
      <div className="absolute -top-12 w-72 h-72 bg-gradient-to-b from-cricket-gold/10 to-transparent rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-cricket-gold/10 rounded-full animate-spin-slow pointer-events-none" style={{ animationDuration: '30s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] border border-dashed border-cricket-vibrant/20 rounded-full animate-spin-slow pointer-events-none" style={{ animationDuration: '20s' }} />

      {/* Main Container for the Floating Cricket Ball */}
      <motion.div
        className="absolute z-30 pointer-events-none"
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ right: "12%", top: "18%" }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" className="drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]">
          <defs>
            <radialGradient id="ballGrad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ff4d4d" />
              <stop offset="60%" stopColor="#b30000" />
              <stop offset="100%" stopColor="#4a0000" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {/* Main sphere */}
          <circle cx="30" cy="30" r="28" fill="url(#ballGrad)" />
          {/* Cricket Seam */}
          <path
            d="M30,2 C36,15 36,45 30,58"
            fill="none"
            stroke="#fcf8f2"
            strokeWidth="1.5"
            strokeDasharray="2,2"
          />
          <path
            d="M30,2 C24,15 24,45 30,58"
            fill="none"
            stroke="#fcf8f2"
            strokeWidth="1.5"
            strokeDasharray="2,2"
          />
          {/* Seam Stitch details */}
          <path
            d="M30,2 C30,15 30,45 30,58"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1"
          />
        </svg>
      </motion.div>

        {/* Swinging Bat Animation */}
        <motion.div
          className="absolute z-20 pointer-events-none origin-bottom-left"
          animate={{
            rotate: [15, -20, 15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ left: "15%", bottom: "20%" }}
        >
          <svg width="70" height="180" viewBox="0 0 70 180" className="drop-shadow-[0_10px_12px_rgba(0,0,0,0.5)]">
            <defs>
              <linearGradient id="woodGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#dfba7a" />
                <stop offset="50%" stopColor="#c59850" />
                <stop offset="100%" stopColor="#a37632" />
              </linearGradient>
              <linearGradient id="gripGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#444444" />
                <stop offset="50%" stopColor="#111111" />
                <stop offset="100%" stopColor="#222222" />
              </linearGradient>
            </defs>
            {/* Grip handle */}
            <rect x="25" y="10" width="10" height="70" rx="3" fill="url(#gripGrad)" />
            {/* Handle wrap lines */}
            <line x1="25" y1="20" x2="35" y2="20" stroke="#d4af37" strokeWidth="1" />
            <line x1="25" y1="35" x2="35" y2="35" stroke="#d4af37" strokeWidth="1" />
            <line x1="25" y1="50" x2="35" y2="50" stroke="#d4af37" strokeWidth="1" />
            <line x1="25" y1="65" x2="35" y2="65" stroke="#d4af37" strokeWidth="1" />
            {/* Rubber top */}
            <ellipse cx="30" cy="10" rx="5" ry="3" fill="#111" />
            {/* Bat blade */}
            <path
              d="M23,75 C23,75 14,90 14,145 C14,168 22,175 30,175 C38,175 46,168 46,145 C46,90 37,75 37,75 Z"
              fill="url(#woodGrad)"
            />
            {/* Bat face contour */}
            <path
              d="M30,76 L30,165"
              fill="none"
              stroke="#8e6020"
              strokeWidth="1.5"
              opacity="0.6"
            />
          </svg>
        </motion.div>

        {/* Centerpiece: Cinematic silhouette displaying the practice actions */}
        <div className="relative w-80 h-80 rounded-2xl glass-card border border-white/10 flex items-center justify-center p-6 shadow-2xl">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cricket-emerald/40 to-transparent pointer-events-none" />
          
          {/* Animated Practice Silhouette Sequence */}
          <div className="grid grid-cols-2 gap-4 w-full h-full relative z-10">
            {/* Batting action card */}
            <motion.div 
              className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/5 border border-white/5"
              whileHover={{ scale: 1.05, borderColor: 'rgba(212,175,55,0.3)' }}
            >
              <svg width="45" height="45" viewBox="0 0 100 100" className="fill-white drop-shadow-[0_0_6px_rgba(26,177,85,0.6)]">
                <circle cx="50" cy="15" r="8" />
                {/* Batting silhouette */}
                <path d="M48,25 L45,45 L30,55 L25,50 L38,40 L44,25 Z M52,25 L55,45 L62,68 L53,75 L45,50 L49,25 Z" />
                <rect x="22" y="52" width="6" height="35" transform="rotate(-30 22 52)" />
              </svg>
              <span className="text-[10px] tracking-widest uppercase font-bold text-cricket-vibrant mt-2">Batting</span>
            </motion.div>

            {/* Bowling action card */}
            <motion.div 
              className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/5 border border-white/5"
              whileHover={{ scale: 1.05, borderColor: 'rgba(212,175,55,0.3)' }}
            >
              <svg width="45" height="45" viewBox="0 0 100 100" className="fill-white drop-shadow-[0_0_6px_rgba(26,177,85,0.6)]">
                <circle cx="55" cy="15" r="8" />
                {/* Bowling delivery arm up */}
                <path d="M52,25 L40,42 L32,65 L22,70 L34,50 L48,25 Z M56,25 L75,10 L82,15 L66,35 L58,25 Z M54,26 L60,45 L55,68 L60,82 L50,82 L47,55 Z" />
              </svg>
              <span className="text-[10px] tracking-widest uppercase font-bold text-cricket-vibrant mt-2">Bowling</span>
            </motion.div>

            {/* Fielding diving action card */}
            <motion.div 
              className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/5 border border-white/5 col-span-2"
              whileHover={{ scale: 1.03, borderColor: 'rgba(212,175,55,0.3)' }}
            >
              <div className="flex items-center gap-4">
                <svg width="45" height="45" viewBox="0 0 100 100" className="fill-white drop-shadow-[0_0_6px_rgba(26,177,85,0.6)]">
                  <circle cx="20" cy="40" r="7" />
                  {/* Diving fielder */}
                  <path d="M25,43 L45,47 L75,38 L88,40 L70,50 L42,49 Z M26,45 L32,58 L45,72 L40,75 L28,60 L24,45 Z" />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] tracking-widest uppercase font-bold text-cricket-gold">Elite Drills</span>
                  <span className="text-[9px] text-gray-400">Fielding & Fitness</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Subtext glow overlay */}
          <div className="absolute bottom-2 text-center">
            <span className="text-[9px] tracking-[0.2em] text-white/50 uppercase">Young Champions In White</span>
          </div>
        </div>
    </div>
  );
};

function Hero() {
  const handleScrollTo = (id) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-cricket-dark"
    >
      {/* Cinematic Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(10,50,25,0.6)_0%,rgba(4,16,9,1)_80%)] z-0" />
      
      {/* Stadium Spotlights simulation */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cricket-gold/5 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-cricket-vibrant/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      
      {/* Pitch texture mesh */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Hero Content grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Copywriting */}
        <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
          {/* Admissions badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cricket-emerald/60 border border-cricket-gold/30 shadow-[0_0_15px_rgba(212,175,55,0.15)] mb-6"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cricket-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cricket-gold"></span>
            </span>
            <span className="font-outfit font-bold text-xs tracking-widest text-white uppercase">
              Admissions Open 2026
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-outfit font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05] mb-6"
          >
            MR FIRSTGEN <br />
            <span className="gold-gradient-text">CRICKET ACADEMY</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans font-medium text-lg sm:text-xl text-gray-300 max-w-xl mb-8 leading-relaxed"
          >
            Where Future Cricket Champions Are Built. Professional turf nets, modern analytics, and expert mentoring.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollTo("#contact")}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-cricket-gold to-cricket-golddark text-black font-outfit font-extrabold text-base tracking-wider uppercase shadow-[0_4px_25px_rgba(212,175,55,0.3)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              Join Now
              <ChevronRight className="w-5 h-5 stroke-[3]" />
            </button>
            <button
              onClick={() => handleScrollTo("#contact")}
              className="px-8 py-4 rounded-full border border-white/20 hover:border-cricket-gold bg-white/5 hover:bg-cricket-gold/5 text-white hover:text-cricket-gold font-outfit font-bold text-base tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5 text-cricket-gold" />
              Book Free Trial
            </button>
          </motion.div>

          {/* Quick trust metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10 w-full"
          >
            <div className="flex flex-col">
              <span className="font-outfit font-black text-2xl text-cricket-gold">1-on-1</span>
              <span className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Mentorship</span>
            </div>
            <div className="flex flex-col">
              <span className="font-outfit font-black text-2xl text-cricket-gold">Turf</span>
              <span className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Nets Practice</span>
            </div>
            <div className="flex flex-col">
              <span className="font-outfit font-black text-2xl text-cricket-gold">Elite</span>
              <span className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Facilities</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Animated Silhouette Showcase */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <PracticeAnimation />
        </div>
        
      </div>
    </section>
  );
}

export default Hero;