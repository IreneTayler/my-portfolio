
"use client";

import { motion } from "framer-motion";
import { FaLaptopCode, FaPaintBrush, FaMobileAlt, FaRocket } from "react-icons/fa";

const services = [
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

const ServicesSection = () => {
  return (
    <section id="services" className="relative w-full py-20 bg-black/20 text-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-2xl font-bold text-[#00ff88]/50 mb-12 border-b pb-2 inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What I Do
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-black/30 backdrop-blur-md p-6 rounded-2xl flex flex-col items-center text-center hover:shadow-[#00ff88] hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-[#00ff88] mb-4">{service.icon}</div>
              <h3 className="text-md font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm md:text-base">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
