
"use client";

import { motion } from "framer-motion";
import { FaLaptopCode, FaPaintBrush, FaMobileAlt, FaRocket } from "react-icons/fa";

const experience = [
  {
    icon: <FaLaptopCode size={30} />,
    title: "Front-End Development",
    description:
      "Creating highly responsive, interactive, and pixel-perfect websites using modern technologies like Next.js, React.js, and TypeScript.",
  },
  {
    icon: <FaPaintBrush size={30} />,
    title: "UI/UX Design",
    description:
      "Designing modern and user-friendly interfaces using Figma, ensuring smooth user experiences across all devices.",
  },
  {
    icon: <FaMobileAlt size={30} />,
    title: "Responsive Web Design",
    description:
      "Ensuring websites are fully optimized for all devices, providing seamless mobile and desktop experiences.",
  },
  {
    icon: <FaRocket size={30} />,
    title: "High Performance & Optimization",
    description:
      "Building websites that are fast, efficient, and scalable, with advanced logic and performance optimization.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative w-full py-20 bg-black/20 text-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">

        {/* Professional Experience Title */}
        <motion.h2
          className="text-4xl font-bold text-[#00ff88]/50 mb-12 border-b pb-2 inline-block border-b"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
           Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-poppins">Experience</span>
        </motion.h2>

        <div className="max-w-6xl mx-auto text-center text-white">
       

          {/* Description */}
          <p className="text-lg mb-16">
            A timeline of my professional journey, responsibilities, and growth as a developer.
          </p>

           <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px bg-gray-500 h-full"></div>

          {/* Top Dot */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <div className="dot bg-green-500"></div>
          </div>

          {/* Central Pulsating Dot (Point of Superiority) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 animate-light-spread">
            <div className="dot bg-green-500"></div>
          </div>

          {/* Experience 1 (Top-left) */}
          <div className="relative flex justify-start items-center mb-16">
            <div className="w-1/2 pr-10 pl-4 text-left">
              <div className="bg-black/30 rounded-lg p-5 flex flex-col items-center justify-center  transition-transform duration-300 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-green-500 mb-4">
                  Full-Stack Web Developer
                </h3>
                <p className="text-lg text-gray-300 mb-4">Web Developer (2024 — Present)</p>
                <ul className="list-disc pl-5 text-gray-300">
                  <li>Develop full-stack web applications using React, TypeScript, Node.js, and FastAPI.</li>
                  <li>Build scalable backend services and design RESTful APIs for web platforms.</li>
                  <li>Convert Figma designs into responsive and pixel-perfect user interfaces.</li>
                  <li>Integrate third-party services including payment systems, CRM tools, and external APIs.</li>
                  <li>Optimize application performance and improve loading speed.</li>
                  <li>Use Docker, Git, and modern development workflows to maintain production systems.</li>
                  <li>Apply AI development tools such as ChatGPT and GitHub Copilot to accelerate development.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience 2 (Bottom-right) */}
          <div className="relative flex justify-end items-center mb-16">
            <div className="w-1/2 pl-10 pr-4 text-left">
              <div className="bg-black/30 rounded-lg p-5 flex flex-col items-center justify-center  transition-transform duration-300 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                  Frontend & Web Developer
                </h3>
                <p className="text-lg text-gray-300 mb-4"> Frontend Developer (2019 — 2024)</p>
                <ul className="list-disc pl-5 text-gray-300">
                  <li>Developed responsive websites using HTML5, CSS3, JavaScript, React, and Vue.js.</li>
                  <li>Built interactive UI components and dynamic frontend features for business platforms.</li>
                  <li>Integrated frontend applications with backend services using REST APIs.</li>
                  <li>Worked with MySQL databases and assisted in backend development.</li>
                  <li>Contributed to backend features using PHP (Laravel) and Node.js.</li>
                  <li>Improved website performance and ensured cross-browser compatibility.</li>
                </ul>

              </div>
            </div>
          </div>
        </div>

        </div>
      </div>
    </section>




  );
};

export default ExperienceSection;
