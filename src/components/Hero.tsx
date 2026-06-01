"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-[900px] md:h-[1000px] flex items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto flex flex-col items-center justify-center px-4 md:px-12 relative z-10">
        
        {/* Centered Text & Buttons */}
        <div className="flex-1 text-center space-y-6">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Hi, I’m <span className="text-[#008236]">Irene Tayler</span>
          </motion.h1>

          <motion.p
            className="text-gray-300 text-lg sm:text-xl md:text-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Full-Stack Developer
          </motion.p>

        </div>

      </div>
    </section>
  );
};

export default Hero;
