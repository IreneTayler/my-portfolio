"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { LuArrowDownToLine } from "react-icons/lu";

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

          <motion.div
            className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-3 sm:space-y-0 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link
              href="#contact"
              className="px-6 py-3 bg-[#008236] shadow-2xl text-white rounded-lg font-medium hover:bg-[#00c950] hover:shadow-[#23f103] transition-colors duration-300"
            >
              Hire Me!
            </Link>
            <a
              href="/Irene_Tayler_CV.pdf"
              download="Irene_Tayler_CV.pdf"
              className="px-6 py-3 border-2 border-[#008236] text-[#008236] rounded-lg font-medium hover:bg-[#008236] hover:text-white transition-colors duration-300 items-center flex"
            >
              Download CV <LuArrowDownToLine  size={24} className="hover:rotate-45" />
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center space-x-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <a
              href="https://github.com/IreneTayler/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-white hover:text-[#00ff88] transition-all duration-300 text-xl"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/Irene-tayler/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-white hover:text-[#00ff88] transition-all duration-300 text-xl"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/8801320694376"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-white hover:text-[#00ff88] transition-all duration-300 text-xl"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.facebook.com/share/1EvVk8tm8E/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-white hover:text-[#00ff88] transition-all duration-300 text-xl"
            >
              <FaFacebook />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
