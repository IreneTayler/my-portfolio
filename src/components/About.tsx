"use client";

import { motion } from "framer-motion";

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

          <div className="flex flex-col items-center justify-center w-full bg-black/30 rounded-lg p-5 transition-transform duration-300">
            <div className="p-6 rounded-lg shadow-lg w-full">
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
            Hi, I’m a <span className="text-[#00ff88]/60"> Web Developer</span> with experience building modern, responsive websites and web applications.
          </p>

          <p className="text-white text-md leading-relaxed">
           I specialize in  <span className="text-[#00ff88]/60">  frontend development, website layout from Figma,   </span> and <span className="text-[#00ff88]/60"> CMS-based solutions such as WordPress </span>.
          </p>

          <p className="text-white text-md leading-relaxed">
             My focus is on creating fast, clean, and user-friendly interfaces that work perfectly on both desktop and mobile devices.
          </p>

          <p className="text-white text-md leading-relaxed">
            I have experience working with <span className="text-[#00ff88]/60"> HTML5, CSS3, JavaScript, PHP, MySQL </span> and <span className="text-[#00ff88]/60"> Git </span> and I regularly collaborate with designers and backend developers to deliver complete web solutions.
          </p>

          <p className="text-white text-md leading-relaxed">
            I also use <span className="text-[#00ff88]/60"> AI tools such as ChatGPT and GitHub Copilot </span> to speed up development, generate code, and automate routine tasks, allowing me to focus on building high-quality products.
          </p>
          
          <p className="text-white text-md leading-relaxed">
            My goal is to create efficient, well-structured websites that solve real business problems and provide excellent user experience.
          </p>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
