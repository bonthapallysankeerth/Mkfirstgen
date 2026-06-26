import React from "react";
import { motion } from "framer-motion";
import { Shield, Sparkles, Dumbbell, Trophy, Users } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Skill Development",
    desc: "Rigorous batting, bowling, and fielding drills using high-end training gear and video analysis.",
    color: "text-cricket-gold"
  },
  {
    icon: Shield,
    title: "Discipline & Mindset",
    desc: "Instilling deep sportsmanship, focus, punctuality, and strategic thinking under pressure.",
    color: "text-cricket-vibrant"
  },
  {
    icon: Dumbbell,
    title: "Athletic Fitness",
    desc: "Custom strength, agility, speed, and endurance regimes mapped for modern athletic requirements.",
    color: "text-cricket-gold"
  },
  {
    icon: Trophy,
    title: "Confidence & Growth",
    desc: "Regular match exposure, league play, and mental prep to boost self-assurance and tactical depth.",
    color: "text-cricket-vibrant"
  }
];

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-cricket-dark to-cricket-pitch relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-cricket-emerald/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[200px] h-[200px] bg-cricket-gold/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <Users className="w-5 h-5 text-cricket-gold" />
            <span className="text-sm font-outfit font-black tracking-widest text-cricket-gold uppercase">About the Academy</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-outfit font-black text-3xl sm:text-5xl text-white mb-6 tracking-tight"
          >
            NURTURING THE NEXT GENERATION
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="h-1 w-24 bg-gradient-to-r from-cricket-gold to-cricket-golddark mx-auto rounded-full mb-6"
          />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Text details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <h3 className="font-outfit font-black text-2xl sm:text-3xl text-white tracking-tight mb-5 leading-snug">
              Professional Coaching Built Around Elite Values
            </h3>
            
            <p className="font-sans font-medium text-base text-gray-300 mb-6 leading-relaxed">
              Professional cricket coaching focused on building skills, discipline, fitness, confidence, and future cricket stars.
            </p>
            
            <p className="font-sans text-gray-400 text-sm mb-8 leading-relaxed">
              At MR Firstgen, we believe every child has the spark to lead the scorecard. Founded under a vision of grassroots cricket development, we provide specialized, modern cricket drills that match the speed and tactics of contemporary international play.
            </p>

            {/* Founders Showcase */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 shadow-xl glass-card flex flex-col sm:flex-row gap-5 items-center">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full border-2 border-cricket-gold bg-cricket-emerald flex items-center justify-center font-outfit font-bold text-white shadow-md">
                  BR
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-cricket-gold bg-cricket-emerald flex items-center justify-center font-outfit font-bold text-white shadow-md">
                  VM
                </div>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs text-cricket-gold uppercase font-bold tracking-widest leading-none">Founded & Managed By</p>
                <h4 className="font-outfit font-extrabold text-white text-base mt-1">
                  Battula Revanth Kumar & Vallepu Murthy
                </h4>
                <p className="text-xs text-gray-400 mt-1">A joint initiative to inspire and train local cricketing youth.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Values Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="p-6 rounded-2xl glass-card border border-white/5 flex flex-col items-start hover:border-cricket-gold/30 hover:bg-white/5 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-cricket-emerald/40 border border-white/10 mb-4">
                  <val.icon className={`w-6 h-6 ${val.color}`} />
                </div>
                <h4 className="font-outfit font-extrabold text-white text-lg mb-2">{val.title}</h4>
                <p className="font-sans text-xs text-gray-400 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default About;