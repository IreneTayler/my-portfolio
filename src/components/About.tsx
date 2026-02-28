"use client";

import { motion } from "framer-motion";
import { FaUserGraduate } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full py-20 bg-black/20 text-white px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl  mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left: Profile Image with subtle floating */}
        <motion.div
          className="flex-1 flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative w-64 h-80 sm:w-80 sm:h-[500px] md:w-96 md:h-[600px] lg:w-[400px] lg:h-[650px]"
            whileInView={{ y: [-12, 10, -12] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg viewBox="0 0 200 260" className="w-full h-full">
              <defs>
                <clipPath id="hexClipAbout">
                  <polygon points="100,10 190,55 190,205 100,250 10,205 10,55" />
                </clipPath>
              </defs>

              {/* Glassy light green background */}
              <polygon
                points="100,10 190,55 190,205 100,250 10,205 10,55"
                fill="rgba(0, 255, 136, 0.15)"
              />

              {/* Profile image */}
              <image
                href="/profile2.png"
                width="200"
                height="260"
                clipPath="url(#hexClipAbout)"
                preserveAspectRatio="xMidYMid slice"
              />

              {/* Border */}
              <polygon
                points="100,10 190,55 190,205 100,250 10,205 10,55"
                fill="none"
                stroke="#00a63e"
                strokeWidth="2"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Right: About Me Text with subtle floating */}
        <motion.div
          className="flex-1 bg-black/30 border border-[#00ff88]/80 p-5 space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-center border-b text-[#00ff88]/70 pb-2">
            About Me
          </h2>

          <p className="text-white text-md leading-relaxed">
            Hi, I’m <span className="text-[#00ff88]/60">Sameul Islam</span>, a Front-End Web Developer creating high-performance, responsive, and visually appealing websites.
          </p>

          <p className="text-white text-md leading-relaxed">
            I am skilled in <span className="text-[#00ff88]/60">HTML5, CSS3, Tailwind CSS, Figma, Next.js, TypeScript, JavaScript, React.js, Git & GitHub</span> and bring designs to life with pixel-perfect precision.
          </p>

          <p className="text-white text-md leading-relaxed">
            I focus on professional websites with complex logic and optimized performance, crafting interactive user experiences with seamless mobile responsiveness.
          </p>

          <p className="text-white text-md leading-relaxed">
            I particularly enjoy developing e-commerce platforms, combining design, functionality, and performance to deliver top-notch digital experiences.
          </p>

          <p className="text-white text-md leading-relaxed">
            Always striving for excellence, I leverage modern technologies to produce websites that are not only beautiful but also fast, efficient, and reliable.
          </p>
            
            <p className="text-white text-md leading-relaxed flex flex-wrap items-center gap-2">
              <FaUserGraduate className="text-[#00ff88]/60 text-md"/> Currently pursuing a <span className="text-[#00ff88]/60">Bachelor of Arts (B.A.)</span> degree.
            </p>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
