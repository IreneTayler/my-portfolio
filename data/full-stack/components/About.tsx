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

          <div className="flex justify-between items-center w-100 bg-black/30 rounded-lg p-5 flex flex-col items-center justify-center  transition-transform duration-300">
            <div className="p-6 rounded-lg shadow-lg w-1/3 w-100" >
              <p className="text-[#00ff88]/60 border-b">
                Experience & Focus
              </p>

              <p>Bachelor of Engineering in Software Engineering</p>

              <p className="h-5"></p>

              <p>I’m a Full-Stack Developer driven by a passion for creating meaningful, high-quality web applications that solve real-world problems. Whether building real-time communication systems or designing seamless user experiences, I thrive on turning complex challenges into simple, scalable solutions. I’m always eager to learn, adapt, and innovate, ensuring that every project I work on not only meets but exceeds expectations.</p>
            
            </div>

            </div>

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
            Hi, I’m a <span className="text-[#00ff88]/60">Full-Stack Developer</span> with a passion for building high-performance, scalable web applications.
          </p>

          <p className="text-white text-md leading-relaxed">
            With expertise in <span className="text-[#00ff88]/60"> React, TypeScript, Laravel   </span> and <span className="text-[#00ff88]/60"> FastAPI </span>,  I create solutions that are both efficient and user-friendly.
          </p>

          <p className="text-white text-md leading-relaxed">
             I’m experienced in frontend technologies like <span className="text-[#00ff88]/60"> React </span> and <span className="text-[#00ff88]/60"> Vue 3 </span>,  backend development with  <span className="text-[#00ff88]/60"> Laravel </span> and <span className="text-[#00ff88]/60"> FastAPI </span>, and have a strong understanding of database systems like  <span className="text-[#00ff88]/60"> MySQL </span> and  <span className="text-[#00ff88]/60"> PostgreSQL </span>.
          </p>

          <p className="text-white text-md leading-relaxed">
            I’ve worked on projects that involve real-time communication systems using WebRTC, API integrations, and e-commerce platforms, always ensuring code quality, performance optimization, and smooth user experiences. 
          </p>

          <p className="text-white text-md leading-relaxed">
            Additionally, I’m well-versed in DevOps practices like containerization using Docker, and I utilize tools like Figma and Git to collaborate effectively in a team setting.
          </p>

          <p className="text-white text-md leading-relaxed">
            My goal is to turn your ideas into functional applications that solve real-world problems and deliver lasting value. I’m always eager to learn and embrace new technologies to stay at the forefront of development.
          </p>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
