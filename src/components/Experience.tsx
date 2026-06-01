"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "ООО «СЕЧ ГРУПП»",
    role: "Full-Stack Developer (Backend-Focused)",
    period: "Апрель 2026 — настоящее время",
    duration: "3 месяца",
    highlights: [
      "Developed guest profile pages for a theater management platform.",
      "Built the ticket system using Convex and Next.js.",
      "Integrated YooKassa payment processing.",
      "Fixed database issues related to duplicate user creation.",
      "Implemented frontend features from Figma designs.",
      "Improved overall user experience across the platform.",
    ],
  },
  {
    company: "Guangzhou Character Union Media LLC",
    role: "Full-Stack Developer",
    period: "Август 2022 — Август 2025",
    duration: "3 года и 1 месяц",
    highlights: [
      "Frontend development using Vue.js.",
      "Backend development with Node.js and PHP.",
      "Creating and maintaining REST APIs.",
      "Working with databases and data processing.",
      "Developing internal platforms and dashboards.",
      "Implementing full-stack functionality end-to-end.",
    ],
  },
  {
    company: "Ранний опыт — Фриланс / Проекты",
    role: "Full-Stack Web Developer",
    period: "Апрель 2020 — Август 2022",
    duration: "2 года и 5 месяцев",
    highlights: [
      "Full-stack web application development for clients.",
      "Creating user interfaces and backend logic.",
      "API integration and database design.",
      "Debugging and performance optimization.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative w-full py-20 bg-black/20 text-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-[#00ff88]/50 mb-12 border-b pb-2 inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Professional{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-poppins">
            Experience
          </span>
        </motion.h2>

        <p className="text-lg text-gray-300 mb-16 max-w-3xl">
          A timeline of my professional journey, responsibilities, and growth as a developer.
        </p>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px bg-gray-500 h-full"></div>

          {/* Top Dot */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <div className="w-3 h-3 rounded-full bg-[#00ff88] shadow-[0_0_10px_#00ff88]"></div>
          </div>

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={exp.company}
                className={`relative flex items-start mb-16 ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {/* Dot on timeline */}
                <div className="absolute left-1/2 -translate-x-1/2 top-2">
                  <div className="w-3 h-3 rounded-full bg-[#00ff88] shadow-[0_0_10px_#00ff88]"></div>
                </div>

                {/* Card */}
                <div className={`w-5/12 ${isLeft ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <div className="bg-black/40 rounded-xl p-6 border border-[#00ff88]/20 shadow-lg hover:border-[#00ff88]/40 transition-colors">
                    <h3 className="text-xl font-semibold text-[#00ff88] mb-1">{exp.role}</h3>
                    <p className="text-sm text-gray-400 mb-1">{exp.company}</p>
                    <p className="text-xs text-gray-500 mb-4">
                      {exp.period} · {exp.duration}
                    </p>
                    <ul className={`space-y-2 text-gray-300 text-sm ${isLeft ? "text-right" : "text-left"}`}>
                      {exp.highlights.map((item, i) => (
                        <li key={i} className={`flex items-start gap-2 ${isLeft ? "flex-row-reverse" : ""}`}>
                          <span className="text-[#00ff88] mt-1 shrink-0">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
