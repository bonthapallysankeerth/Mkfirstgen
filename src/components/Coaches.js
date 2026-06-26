import React from "react";
import { motion } from "framer-motion";
import { Award, Sparkles, Trophy, Users } from "lucide-react";
import trophyImg from "../assets/images/coaches-trophy.jpg";
import fieldImg from "../assets/images/coaches-field.jpg";

const coachesList = [
  {
    name: "Coach Revanth",
    fullName: "Battula Revanth Kumar",
    role: "Co-Founder & Head Coach",
    specialty: "Batting Technique & Fast Bowling Mechanics",
    description: "Specializes in developing clean stroke play, refining batting stances, and high-performance fast bowling run-ups.",
    image: trophyImg,
    badge: "Championship Winner",
    color: "border-cricket-gold"
  },
  {
    name: "Coach Murthy",
    fullName: "Vallepu Murthy",
    role: "Co-Founder & Head Coach",
    specialty: "Spin Bowling, Fielding Reflexes & Fitness",
    description: "Focuses on spinning mechanics, diving catching drills, agility, endurance training, and tactical match preparation.",
    image: fieldImg,
    badge: "Elite Master Coach",
    color: "border-cricket-vibrant"
  }
];

function Coaches() {
  return (
    <section id="coaches" className="py-24 bg-cricket-dark relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cricket-emerald/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <Trophy className="w-5 h-5 text-cricket-gold animate-bounce" />
            <span className="text-sm font-outfit font-black tracking-widest text-cricket-gold uppercase">Expert Mentorship</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-outfit font-black text-3xl sm:text-5xl text-white mb-6 tracking-tight"
          >
            MEET OUR HEAD COACHES
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-1 w-24 bg-gradient-to-r from-cricket-gold to-cricket-golddark mx-auto rounded-full mb-6"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-sm max-w-lg mx-auto"
          >
            Learn directly from the founders themselves. Dedicated coaches with years of match-play experience and a vision for future talent.
          </motion.p>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {coachesList.map((coach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl overflow-hidden glass-card border border-white/10 group flex flex-col h-full`}
            >
              {/* Card Image Area */}
              <div className="relative h-[320px] sm:h-[400px] overflow-hidden">
                {/* Overlay shadows */}
                <div className="absolute inset-0 bg-gradient-to-t from-cricket-dark via-cricket-dark/30 to-transparent z-10" />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-300 z-0" />
                
                <img
                  src={coach.image}
                  alt={coach.fullName}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gilded Floating Badge */}
                <span className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-full bg-cricket-dark/80 backdrop-blur-md border border-cricket-gold/30 text-[10px] font-outfit font-black tracking-widest text-cricket-gold uppercase">
                  {coach.badge}
                </span>
              </div>

              {/* Card Copywriting */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between relative z-10 bg-cricket-pitch/90">
                <div>
                  {/* Name and Designation */}
                  <span className="text-xs font-bold text-cricket-vibrant uppercase tracking-wider block">
                    {coach.role}
                  </span>
                  <h3 className="font-outfit font-black text-2xl sm:text-3xl text-white mt-1 group-hover:text-cricket-gold transition-colors duration-300">
                    {coach.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium italic mt-0.5">
                    {coach.fullName}
                  </p>

                  <hr className="border-white/5 my-4" />

                  {/* Specialty */}
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-cricket-gold flex-shrink-0" />
                    <span className="font-outfit font-bold text-xs sm:text-sm text-cricket-goldlight tracking-wide">
                      {coach.specialty}
                    </span>
                  </div>

                  {/* Detailed Description */}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans font-medium">
                    {coach.description}
                  </p>
                </div>

                {/* Footer Icon Grid on Card */}
                <div className="flex gap-4 mt-6 pt-5 border-t border-white/5 text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-cricket-gold" />
                    Turf Nets
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-cricket-gold" />
                    1-on-1 Guidance
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Coaches;