import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, MessageSquare, Compass } from "lucide-react";
function Contact() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  // Show WhatsApp floating button only after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowWhatsApp(true);
      } else {
        setShowWhatsApp(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-cricket-dark to-cricket-pitch relative overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-cricket-emerald/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cricket-gold/5 rounded-full blur-[120px] pointer-events-none" />

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
            <MapPin className="w-5 h-5 text-cricket-gold" />
            <span className="text-sm font-outfit font-black tracking-widest text-cricket-gold uppercase">Contact Us</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-outfit font-black text-3xl sm:text-5xl text-white mb-6 tracking-tight"
          >
            START YOUR JOURNEY TODAY
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-1 w-24 bg-gradient-to-r from-cricket-gold to-cricket-golddark mx-auto rounded-full mb-6"
          />
        </div>

        {/* Contact details & Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left: Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="font-outfit font-black text-2xl text-white tracking-wide mb-2">
              Academy HQ Details
            </h3>
            <p className="text-sm text-gray-400 font-medium font-sans mb-6">
              Drop by for a direct visit or call our lines to speak with Coaches Revanth or Murthy.
            </p>

            {/* Address Card */}
            <div className="p-6 rounded-2xl glass-card border border-white/5 flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-cricket-gold/15 text-cricket-gold flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-cricket-gold uppercase tracking-wider block">Academy Address</span>
                <p className="font-outfit font-black text-lg text-white mt-1">Sri Ramnagar Colony</p>
                <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed mt-1">
                  Suraram Village, Suraram, Hyderabad, Telangana - 500055
                </p>
                
                {/* Landmark info */}
                <div className="mt-3.5 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-gray-400 font-semibold uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-cricket-gold" />
                  Landmark: Beside NSKK School
                </div>
              </div>
            </div>

            {/* Phone Numbers Card */}
            <div className="p-6 rounded-2xl glass-card border border-white/5 flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-cricket-vibrant/15 text-cricket-vibrant flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="w-full">
                <span className="text-[10px] font-bold text-cricket-vibrant uppercase tracking-wider block">Phone & WhatsApp Support</span>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-3 w-full">
                  <a
                    href="tel:8897874006"
                    className="flex items-center gap-2 text-white hover:text-cricket-gold transition-colors group"
                  >
                    <span className="font-outfit font-black text-lg tracking-wide">8897874006</span>
                    <span className="text-[9px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-400 uppercase font-semibold group-hover:border-cricket-gold/30">Call</span>
                  </a>
                  <a
                    href="tel:9052264514"
                    className="flex items-center gap-2 text-white hover:text-cricket-gold transition-colors group"
                  >
                    <span className="font-outfit font-black text-lg tracking-wide">9052264514</span>
                    <span className="text-[9px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-400 uppercase font-semibold group-hover:border-cricket-gold/30">Call</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Timing Info */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3 text-xs text-gray-300">
              <Compass className="w-5 h-5 text-cricket-gold" />
              <div>
                <span className="font-bold text-white block">Operating Hours:</span>
                Daily Morning: 6:00 AM - 9:00 AM | Evening: 4:00 PM - 7:00 PM
              </div>
            </div>
          </motion.div>

          {/* Right: Premium Pitch Map Locator Widget */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 w-full"
          >
            <div className="p-6 rounded-3xl glass-card border border-white/10 relative overflow-hidden bg-gradient-to-b from-cricket-pitch to-transparent">
              <div className="absolute inset-0 bg-gradient-to-tr from-cricket-emerald/30 to-transparent pointer-events-none z-0" />
              
              {/* Header inside widget */}
              <div className="flex justify-between items-center relative z-10 mb-6">
                <div>
                  <h4 className="font-outfit font-black text-lg text-white">Interactive Pitch Map</h4>
                  <p className="text-[10px] text-gray-400 tracking-wider">Suraram Village Academy Location</p>
                </div>
                {/* Lat/Long display */}
                <div className="px-2.5 py-1 rounded bg-black/40 text-[9px] font-bold text-cricket-gold tracking-widest font-mono border border-white/5">
                  HYD, TG (500055)
                </div>
              </div>

              {/* Styled Cricket Pitch Locator Graphic */}
              <div className="relative h-64 rounded-2xl border border-white/5 bg-cricket-dark flex items-center justify-center overflow-hidden z-10">
                {/* Outfield green radial */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#052914_0%,#041009_90%)]" />
                
                {/* Pitch outline */}
                <div className="absolute w-[80px] h-[190px] border border-white/10 rounded-sm bg-cricket-emerald/20 flex flex-col justify-between p-2">
                  {/* Creases */}
                  <div className="w-full h-4 border-b border-white/20" />
                  <div className="w-full h-4 border-t border-white/20" />
                </div>
                
                {/* Turf boundary circles */}
                <div className="absolute w-[180px] h-[180px] border border-dashed border-cricket-gold/10 rounded-full animate-spin-slow pointer-events-none" style={{ animationDuration: '40s' }} />
                <div className="absolute w-[240px] h-[240px] border border-dashed border-white/5 rounded-full pointer-events-none" />

                {/* Pulsing Pin for Academy Location */}
                <div className="absolute flex flex-col items-center justify-center z-20">
                  {/* Outer pulse */}
                  <span className="relative flex h-8 w-8 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cricket-gold opacity-75"></span>
                    <span className="absolute inline-flex rounded-full h-5 w-5 bg-cricket-gold/40"></span>
                    <MapPin className="relative h-5 w-5 text-white filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
                  </span>
                  {/* Popup label */}
                  <div className="mt-1 px-3 py-1 rounded bg-cricket-dark/95 border border-cricket-gold/40 text-[9px] font-outfit font-black tracking-wider text-cricket-gold uppercase shadow-lg">
                    MR FIRSTGEN ACADEMY
                  </div>
                </div>

                {/* Nearby landmarks overlays */}
                <div className="absolute top-6 left-6 text-[8px] font-bold text-gray-500 tracking-wider">
                  NSKK SCHOOL 
                </div>
                <div className="absolute bottom-6 right-6 text-[8px] font-bold text-gray-500 tracking-wider">
                  SRI RAMNAGAR COLONY
                </div>
              </div>

              {/* Action Buttons to redirect */}
              <div className="flex gap-4 mt-6 relative z-10">
                <a
                  href="https://maps.google.com/?q=Suraram+Village+Hyderabad+NSKK+School"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3.5 rounded-full border border-cricket-gold hover:bg-cricket-gold/10 text-white font-outfit font-bold text-xs tracking-wide uppercase text-center transition-all duration-300"
                >
                  Open in Google Maps
                </a>
                <a
                  href="https://wa.me/918897874006?text=Hi%20MR%20Firstgen%20Cricket%20Academy,%20I'm%20interested%20in%20admissions%20/%20free%20trial."
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba56] text-white font-outfit font-black text-xs tracking-wide uppercase text-center shadow-lg transition-all duration-300 flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  Chat With Us
                </a>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Floating WhatsApp Action Button */}
      <AnimatePresence>
        {showWhatsApp && (
          <motion.a
            href="https://wa.me/918897874006?text=Hi%20MR%20Firstgen%20Cricket%20Academy,%20I'm%20interested%20in%20admissions%20/%20free%20trial."
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#25D366] hover:bg-[#20ba56] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
            aria-label="Chat on WhatsApp"
          >
            {/* Pulsing indicator */}
            <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-cricket-gold"></span>
            </span>
            
            {/* Main Icon */}
            <MessageSquare className="w-7 h-7 fill-white stroke-none" />
            
            {/* Tooltip on hover */}
            <span className="absolute right-16 bg-cricket-pitch text-white border border-white/10 text-[10px] font-outfit font-black tracking-wider uppercase px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              Inquire on WhatsApp
            </span>
          </motion.a>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Contact;