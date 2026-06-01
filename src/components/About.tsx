"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full py-24 bg-black/20 text-white px-6 md:px-12"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#00ff88]/80 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="w-16 h-0.5 bg-[#00ff88]/40 mx-auto mb-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        />

        <motion.p
          className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          I&apos;m Irene Tayler — a Full-Stack Developer with 5+ years of experience building web applications for teams in Russia and China.
        </motion.p>

        <motion.p
          className="text-gray-300 leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          I work across the full stack: React, Next.js, and Vue.js on the frontend; Node.js, PHP, and Python (FastAPI) on the backend. I translate Figma designs into pixel-perfect interfaces, design REST APIs, and integrate payment systems like YooKassa.
        </motion.p>

        <motion.p
          className="text-gray-300 leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          I use AI tools daily — ChatGPT and GitHub Copilot are part of my workflow for scaffolding, debugging, and architecture decisions. I value clean code, fast load times, and interfaces that simply work.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {["St. Petersburg, Russia", "irene_tayler@mail.ru", "+7 981 932-52-95"].map((item) => (
            <span
              key={item}
              className="px-4 py-2 text-sm text-[#00ff88]/80 border border-[#00ff88]/20 rounded-full bg-black/20"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
