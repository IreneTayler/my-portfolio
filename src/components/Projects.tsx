"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  image: string;
  liveLink: string;
  githubLink: string;
}

const projects: Project[] = [
   {
    title: "E-commerce 1",
    description: "Modern, high-performance online store built for speed, style, and seamless user experience.",
    image: "/luxecart.png",
    liveLink: "https://luxecart-gilt.vercel.app/",
    githubLink: "https://github.com/IreneTayler/",
  },
  {
    title: "Landing Page 1",
    description: "Minimal, responsive landing page crafted for powerful product presentation and brand impact.",
    image: "/fizz.png",
    liveLink: "https://drinkings-fizz.netlify.app/",
    githubLink: "https://github.com/IreneTayler/",
  },
  {
    title: "Hotel Booking 1",
    description: "Fully responsive hotel booking website with elegant UI, smooth interactions, and professional front-end architecture.",
    image: "/rolax-resort.png",
    liveLink: "https://rolax-resort-beige.vercel.app/",
    githubLink: "https://github.com/IreneTayler/",
  },
  {
    title: "E-commerce 2",
    description: "Modern, high-performance online store built for speed, style, and seamless user experience.",
    image: "/luxecart.png",
    liveLink: "https://luxecart-gilt.vercel.app/",
    githubLink: "https://github.com/IreneTayler/",
  },
    {
    title: "Landing Page 2",
    description: "Minimal, responsive landing page crafted for powerful product presentation and brand impact.",
    image: "/fizz.png",
    liveLink: "https://drinkings-fizz.netlify.app/",
    githubLink: "https://github.com/IreneTayler/",
  },
  {
    title: "Hotel Booking 2",
    description: "Fully responsive hotel booking website with elegant UI, smooth interactions, and professional front-end architecture.",
    image: "/rolax-resort.png",
    liveLink: "https://rolax-resort-beige.vercel.app/",
    githubLink: "https://github.com/IreneTayler/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full py-20 px-6 md:px-12 bg-black/40 text-white relative">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          className="text-2xl font-bold text-[#00ff88]/50 border-b border-[#00ff88] pb-2 inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Recent Projects
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-200 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A selection of projects demonstrating my expertise in front-end development and design.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative group rounded-xl overflow-hidden border border-[#00ff88] shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Project Image */}
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={250}
              className="w-full h-72 sm:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay with Neon Glow */}
            <div className="absolute inset-0 bg-black/70  opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-xl font-bold text-[#00ff88]/80 mb-2 drop-shadow-lg">{project.title}</h3>
              <p className="text-gray-100 text-sm mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <Link
                  href={project.liveLink}
                  target="_blank"
                  className="px-4 py-2 text-white border border-[#00ff88] font-medium rounded-lg hover:bg-[#00c950] transition-colors duration-300 hover:shadow-[0_0_10px_#00ff88]"
                >
                  Live
                </Link>
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className="px-4 py-2 border border-[#00ff88] text-[#00ff88] rounded-lg hover:bg-[#00ff88] hover:text-black transition-colors duration-300 shadow-[0_0_10px_#00ff88]"
                >
                  GitHub
                </Link>
              </div>
            </div>

            {/* Neon Glow Effect */}
            <div className="absolute inset-0 pointer-events-none rounded-xl transition-all duration-500 group-hover:shadow-[0_0_30px_#00ff88]"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

