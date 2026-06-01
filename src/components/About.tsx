"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full py-20 bg-black/20 text-white px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* Left: Education & Summary */}
        <motion.div
          className="flex-1 flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative w-full max-w-md"
            whileInView={{ y: [-8, 8, -8] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-center justify-center w-full bg-black/30 rounded-lg p-6 border border-[#00ff88]/20">
              <div className="p-4 rounded-lg w-full">
                <p className="text-[#00ff88]/60 border-b border-[#00ff88]/30 pb-2 mb-4 font-semibold">
                  Education & Focus
                </p>
                <p className="text-gray-200 leading-relaxed">
                  Bachelor of Engineering in Software Engineering
                </p>
                <p className="h-4"></p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Full-Stack Developer with 5+ years of experience building production-grade web applications. Passionate about clean architecture, performance optimization, and translating complex requirements into simple, scalable solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: About Me */}
        <motion.div
          className="flex-1 bg-black/30 border border-[#00ff88]/30 p-6 space-y-4 rounded-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-center border-b border-[#00ff88]/30 text-[#00ff88]/70 pb-2">
            About Me
          </h2>

          <p className="text-white text-md leading-relaxed">
            Hi, I&apos;m <span className="text-[#00ff88]/60">Irene Tayler</span>, a Full-Stack Developer based in St. Petersburg, Russia. I have 5+ years of hands-on experience building modern, responsive web applications for companies in Russia and China.
          </p>

          <p className="text-white text-md leading-relaxed">
            I specialize in <span className="text-[#00ff88]/60">frontend development with React, Next.js, and Vue.js</span>, as well as <span className="text-[#00ff88]/60">backend systems using Node.js, PHP, and Python (FastAPI)</span>. I routinely translate Figma designs into pixel-perfect interfaces and build scalable APIs.
          </p>

          <p className="text-white text-md leading-relaxed">
            My recent work at <span className="text-[#00ff88]/60">СЕЧ ГРУПП</span> involved developing a theater management platform with Convex, Next.js, and YooKassa payment integration. Previously, at <span className="text-[#00ff88]/60">Guangzhou Character Union Media</span>, I built internal platforms and dashboards using Vue.js and Node.js.
          </p>

          <p className="text-white text-md leading-relaxed">
            I use <span className="text-[#00ff88]/60">AI tools such as ChatGPT and GitHub Copilot</span> to accelerate development, generate boilerplate, and review logic — letting me focus on architecture and user experience.
          </p>

          <p className="text-white text-md leading-relaxed">
            My goal is to deliver efficient, well-structured software that solves real business problems and provides an excellent user experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
