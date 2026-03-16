"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  image2: string;
  image3: string;
  liveLink: string;
}

const projects: Project[] = [
  {
    title: "Kindertales",
    description:
      "Kindertales is a childcare management platform designed to help daycare centers manage operations, communication, and administrative processes through a unified web system. In this project, I recreated the landing page using React, TypeScript, and Tailwind CSS, applying a component-based architecture and responsive design.",
    image: "/Kindertales1.png",
    image2: "/Kindertales2.png",
    image3: "/Kindertales3.png",
    liveLink: "https://www.kindertales.com/",
  },
  {
    title: "MyAIWiz",
    description:
      "MyAIWiz is an AI-powered SaaS platform that automates the extraction and processing of tax documents for accounting workflows. The landing page was implemented using React, TypeScript, and Tailwind CSS with a focus on clean UI and reusable components.",
    image: "/MyAIWiz1.png",
    image2: "/MyAIWiz2.png",
    image3: "/MyAIWiz3.png",
    liveLink: "http://myaiwiz.com/",
  },
  {
    title: "Construkted",
    description:
      "This platform allows users to upload and explore large 3D photogrammetry models and point clouds. It is designed for showcasing architectural scans, historical sites, and large-scale 3D assets directly in the browser.",
    image: "/Construkted1.png",
    image2: "/Construkted2.png",
    image3: "/Construkted3.png",
    liveLink: "https://construkted.com/",
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="w-full py-20 px-6 md:px-12 bg-black/40 text-white relative"
    >
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl font-semibold text-[#00ff88]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          My Recent Projects
        </motion.h2>

        <motion.p
          className="mt-3 text-gray-300 text-sm max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          A selection of projects demonstrating my expertise in front-end
          development and design.
        </motion.p>
      </div>

      {/* Project cards – refined, image shown in full */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.35 }}
            className="group"
          >
            <button
              type="button"
              onClick={() => setSelectedProject(project)}
              className="w-full text-left rounded-none border-l-2 border-white/20 bg-[#0a0a0a]/80 hover:border-[#00ff88] focus:outline-none focus-visible:border-[#00ff88] focus-visible:ring-1 focus-visible:ring-[#00ff88]/40 focus-visible:ring-inset transition-colors duration-200"
            >
              {/* Image: full image visible, never cropped – scales to fit */}
              <div className="relative w-full h-[200px] bg-[#0f0f0f] flex items-center justify-center p-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain object-center p-2"
                />
              </div>

              <div className="px-5 py-4 border-t border-white/10">
                <h3 className="font-medium uppercase tracking-[0.2em] text-[0.75rem] text-[#00ff88]/90">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <span className="mt-3 inline-block text-xs text-[#00ff88]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  View details
                </span>
              </div>
            </button>
          </motion.article>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-6"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-xl"
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0d0d0d]/95 shadow-2xl shadow-black/50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Accent line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00ff88] to-transparent rounded-t-2xl" />

            <div className="p-6 sm:p-8">
              {/* Close button */}
              <button
                className="absolute top-5 right-5 w-9 h-9 rounded-full border border-white/20 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-[#00ff88]/50 flex items-center justify-center text-lg transition-colors"
                onClick={() => setSelectedProject(null)}
                aria-label="Close"
              >
                ×
              </button>

              <h3 className="text-2xl sm:text-3xl font-semibold text-white pr-12 mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                {selectedProject.description}
              </p>

              {/* Site preview images – three browser-style frames */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {[selectedProject.image, selectedProject.image2, selectedProject.image3].map((src, i) => (
                  <div
                    key={i}
                    className="group rounded-xl overflow-hidden border border-white/10 bg-[#111] shadow-lg shadow-black/30"
                  >
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#1a1a1a] border-b border-white/10">
                      <span className={`w-2 h-2 rounded-full ${i === 0 ? "bg-[#00ff88]/60" : "bg-white/30"}`} />
                      <span className={`w-2 h-2 rounded-full ${i === 1 ? "bg-[#00ff88]/60" : "bg-white/30"}`} />
                      <span className={`w-2 h-2 rounded-full ${i === 2 ? "bg-[#00ff88]/60" : "bg-white/30"}`} />
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={src}
                        alt={`${selectedProject.title} – view ${i + 1}`}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00ff88] text-black text-sm font-medium hover:bg-[#00e07a] hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all"
              >
                Visit Website
                <span aria-hidden>→</span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}