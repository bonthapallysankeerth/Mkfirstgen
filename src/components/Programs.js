import React from "react";
import { motion } from "framer-motion";
import { Swords, Compass, ShieldAlert, Dumbbell, PlayCircle, Trophy, Activity } from "lucide-react";

const programsList = [
  {
    icon: Swords,
    title: "Batting Training",
    description: "Master drive techniques, defensive stances, hook/pull shots, and spin batting tactics with custom turf net bowling machines.",
    drills: ["Front/Back foot play", "Stance correction", "Pace & Spin handling"],
    color: "from-amber-500/20 to-cricket-gold/10 text-cricket-gold"
  },
  {
    icon: Compass,
    title: "Bowling Training",
    description: "Dedicated bowling coach coaching line, length, swing, seam movement, and spin variations (off-spin, leg-spin, googly).",
    drills: ["Run-up & release sync", "Swing & Seam drills", "Speed progression"],
    color: "from-emerald-500/20 to-cricket-vibrant/10 text-cricket-vibrant"
  },
  {
    icon: ShieldAlert,
    title: "Fielding Practice",
    description: "Intense drills on catching reflexes, boundary diving, slip catching, direct hit targeting, and situational awareness.",
    drills: ["Reflex catching nets", "Diving & sliding safety", "Flat throws accuracy"],
    color: "from-cyan-500/20 to-blue-500/10 text-cyan-400"
  },
  {
    icon: Dumbbell,
    title: "Fitness Training",
    description: "Cricket-focused fitness regimes to improve explosive speed, core strength, shoulder stamina, and injury prevention.",
    drills: ["Sprint intervals", "Core & stability workouts", "Flexibility routines"],
    color: "from-red-500/20 to-rose-500/10 text-rose-400"
  },
  {
    icon: PlayCircle,
    title: "Match Practice",
    description: "Weekly internal simulation games and match scenarios under pressure to teach tactical positioning and run chasing.",
    drills: ["Powerplay scenarios", "Death overs bowling", "Running between wickets"],
    color: "from-violet-500/20 to-purple-500/10 text-violet-400"
  },
  {
    icon: Trophy,
    title: "Tournament Prep",
    description: "Preparing athletes for district, state, and club level leagues. Includes tactical mindset prep and match analytics review.",
    drills: ["League rules seminar", "Opponent video analysis", "Mental pressure drills"],
    color: "from-yellow-500/20 to-cricket-gold/10 text-yellow-400"
  }
];

function Programs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60 }
    }
  };

  return (
    <section id="programs" className="py-24 bg-gradient-to-b from-cricket-pitch to-cricket-dark relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-10 right-0 w-[400px] h-[400px] bg-cricket-emerald/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[300px] h-[300px] bg-cricket-gold/5 rounded-full blur-[100px] pointer-events-none" />

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
            <Swords className="w-5 h-5 text-cricket-gold" />
            <span className="text-sm font-outfit font-black tracking-widest text-cricket-gold uppercase">Academy Programs</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-outfit font-black text-3xl sm:text-5xl text-white mb-6 tracking-tight"
          >
            ELITE TRAINING CURRICULUM
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
            className="text-gray-400 text-sm max-w-xl mx-auto font-sans font-medium"
          >
            Comprehensive training regimes covering every aspect of professional cricket, designed to scale with each player's proficiency.
          </motion.p>
        </div>

        {/* Programs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programsList.map((prog, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6, borderColor: 'rgba(212,175,55,0.3)' }}
              className="p-8 rounded-3xl glass-card border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent hover:glass-card-hover flex flex-col justify-between h-full"
            >
              <div>
                {/* Icon Box */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${prog.color.split(" ").slice(0, 2).join(" ")} border border-white/10 flex items-center justify-center mb-6`}>
                  <prog.icon className={`w-7 h-7 ${prog.color.split(" ")[2]}`} />
                </div>

                {/* Title */}
                <h3 className="font-outfit font-black text-xl text-white mb-3 tracking-wide">{prog.title}</h3>
                
                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-gray-400 mb-6 leading-relaxed font-medium">{prog.description}</p>
              </div>

              {/* Drills Checklists */}
              <div className="pt-4 border-t border-white/5">
                <span className="text-[10px] uppercase font-bold text-cricket-gold tracking-widest block mb-2">Key Workouts:</span>
                <ul className="flex flex-col gap-1.5">
                  {prog.drills.map((drill, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2 text-xs text-gray-300 font-sans font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-cricket-vibrant" />
                      {drill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Programs;