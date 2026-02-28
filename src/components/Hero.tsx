"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import GlobalParticles from "./GlobalParticles";
import { LuArrowDownToLine } from "react-icons/lu";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-[900px] md:h-[1000px] flex items-center justify-center overflow-hidden"
    >
      {/* Particles */}
      <GlobalParticles />

      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 md:px-12 relative z-10">
        
        {/* Left Text & Buttons */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Hi, I’m <span className="text-[#008236]">Sameul</span>
          </motion.h1>

          <motion.p
            className="text-gray-300 text-lg sm:text-xl md:text-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Front-End Developer & Designer
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
              href="/Sameul_Islam_CV.pdf"
              download="Sameul_Islam_CV.pdf"
              className="px-6 py-3 border-2 border-[#008236] text-[#008236] rounded-lg font-medium hover:bg-[#008236] hover:text-white transition-colors duration-300 items-center flex"
            >
              Download CV <LuArrowDownToLine  size={24} className="hover:rotate-45" />
            </a>
          </motion.div>

          {/* Social Icons */}
              {/* Social Icons */}
<motion.div
  className="flex justify-center md:justify-start space-x-4 mt-6"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 1.2 }}
>
  <a
    href="https://github.com/sameul-islam"
    target="_blank"
    className="p-3 border-2 border-[#008236] rounded-lg hover:bg-[#008236] text-white  transition-all duration-300 text-xl"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/sameul-islam/"
    target="_blank"
    className="p-3 border-2 border-[#008236] rounded-lg hover:bg-[#008236] text-white  transition-all duration-300 text-xl"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://wa.me/8801320694376"
    target="_blank"
    className="p-3 border-2 border-[#008236] rounded-lg hover:bg-[#008236] text-white  transition-all duration-300 text-xl"
  >
    <FaWhatsapp />
  </a>

  <a
    href="https://www.facebook.com/share/1EvVk8tm8E/"
    target="_blank"
    className="p-3 border-2 border-[#008236] rounded-lg hover:bg-[#008236] text-white transition-all duration-300 text-xl"
  >
    <FaFacebook />
  </a>
</motion.div>



        </div>

        {/* Right Image with Hexagonal Border */}
        <motion.div
          className="flex-1 mb-10 md:mb-0 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="relative w-64 h-80 sm:w-80 sm:h-[500px] md:w-96 md:h-[600px] lg:w-[400px] lg:h-[650px]">
            <svg viewBox="0 0 200 260" className="w-full h-full">
              <defs>
                <clipPath id="hexClip">
                  <polygon points="100,10 190,55 190,205 100,250 10,205 10,55" />
                </clipPath>
              </defs>
              <image
                href="/profile1.png"
                width="200"
                height="260"
                clipPath="url(#hexClip)"
                preserveAspectRatio="xMidYMid slice"
              />
              <polygon
                points="100,10 190,55 190,205 100,250 10,205 10,55"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
