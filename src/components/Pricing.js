import React from "react";
import { motion } from "framer-motion";
import { Check, Flame, Star, Zap } from "lucide-react";

const features = [
  "Batting Training & Net Practice",
  "Bowling Training & Action Drill",
  "Fielding Practice & Diving Drills",
  "Fitness Training & Agility Sessions",
  "Match Practice & Simulation Games",
  "Tournament Preparation & Analysis"
];

const plans = [
  {
    name: "Monthly Plan",
    price: "₹3000",
    period: "Month",
    tag: "Get Started",
    save: null,
    popular: false,
    icon: Zap,
    description: "Ideal for players looking to explore or sample the training programs."
  },
  {
    name: "6 Months Plan",
    price: "₹15000",
    period: "6 Months",
    tag: "Best Value",
    save: "Save ₹3000",
    popular: true,
    icon: Star,
    description: "Highly recommended for developing fundamental skill habits and athletic base."
  },
  {
    name: "12 Months Plan",
    price: "₹30000",
    period: "12 Months",
    tag: "Maximum savings",
    save: "Save ₹6000",
    popular: false,
    icon: Flame,
    description: "Ultimate intensive training for state, district, or professional league aspiration."
  }
];

function Pricing() {
  const handleScrollTo = (id) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-cricket-dark relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cricket-emerald/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cricket-gold/5 rounded-full blur-[120px] pointer-events-none" />

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
            <Zap className="w-5 h-5 text-cricket-gold" />
            <span className="text-sm font-outfit font-black tracking-widest text-cricket-gold uppercase">Membership & Fees</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-outfit font-black text-3xl sm:text-5xl text-white mb-6 tracking-tight"
          >
            CHOOSE YOUR TRAINING PLAN
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
            className="text-gray-400 text-sm max-w-lg mx-auto font-sans font-medium"
          >
            Premium and affordable plans to match your commitment levels. Save more with our long-term academy memberships.
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl p-8 glass-card flex flex-col justify-between border ${
                plan.popular 
                  ? "border-cricket-gold bg-gradient-to-b from-cricket-emerald/30 to-cricket-pitch shadow-[0_8px_30px_rgba(212,175,55,0.15)] scale-100 lg:scale-[1.03]" 
                  : "border-white/10"
              }`}
            >
              {/* Popular glowing label */}
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cricket-gold to-cricket-golddark text-black text-[10px] font-outfit font-black tracking-widest uppercase shadow-md">
                  Most Popular
                </span>
              )}

              {/* Top details */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-outfit font-extrabold text-lg text-gray-300 uppercase tracking-wide">
                    {plan.name}
                  </span>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                    <plan.icon className={`w-5 h-5 ${plan.popular ? 'text-cricket-gold' : 'text-cricket-vibrant'}`} />
                  </div>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-outfit font-black text-4xl sm:text-5xl text-white">{plan.price}</span>
                  <span className="text-gray-400 text-sm font-medium">/ {plan.period}</span>
                </div>

                {/* Offer Save Badge */}
                {plan.save ? (
                  <span className="inline-block px-3 py-1 rounded-full bg-cricket-vibrant/10 border border-cricket-vibrant/25 text-[10px] font-bold text-cricket-vibrant uppercase tracking-wider mb-5">
                    {plan.save}
                  </span>
                ) : (
                  <div className="h-6 mb-5" /> // Spacer to align heights
                )}

                {/* Brief description */}
                <p className="text-xs text-gray-400 leading-relaxed font-sans font-medium mb-6">
                  {plan.description}
                </p>

                <hr className="border-white/5 mb-6" />

                {/* Core Curriculum Checklist */}
                <ul className="flex flex-col gap-3.5 mb-8">
                  {features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className="p-0.5 rounded-full bg-cricket-vibrant/15 text-cricket-vibrant mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-300 font-sans font-medium">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleScrollTo("#contact")}
                className={`w-full py-4 rounded-full font-outfit font-extrabold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.popular
                    ? "bg-gradient-to-r from-cricket-gold to-cricket-golddark text-black shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.45)] transform hover:scale-[1.01]"
                    : "border border-white/20 hover:border-cricket-gold hover:bg-cricket-gold/5 text-white hover:text-cricket-gold"
                }`}
              >
                Join Program
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Pricing;
