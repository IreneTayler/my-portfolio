"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "ООО «СЕЧ ГРУПП»",
    role: "Full-Stack Developer (Backend-Focused)",
    period: "Апрель 2026 — настоящее время",
    duration: "3 месяца",
    highlights: [
      "Building guest profile pages for a theater management system",
      "Ticket booking flow with Convex and Next.js",
      "YooKassa payment integration — the fun part was handling the edge cases",
      "Fixed a persistent duplicate user bug that had been annoying everyone",
      "Frontend work from Figma — the usual translation from design to code",
    ],
  },
  {
    company: "Guangzhou Character Union Media LLC",
    role: "Full-Stack Developer",
    period: "Август 2022 — Август 2025",
    duration: "3 года и 1 месяц",
    highlights: [
      "Vue.js frontend for internal tools — lots of dashboards and data tables",
      "Node.js and PHP APIs — whatever the project needed",
      "Built a content management system from scratch when off-the-shelf didn't fit",
      "Database work — MySQL, query optimization, the usual maintenance",
      "Three years of learning how to build things that actually get used",
    ],
  },
  {
    company: "Ранний опыт — Фриланс / Проекты",
    role: "Full-Stack Web Developer",
    period: "Апрель 2020 — Август 2022",
    duration: "2 года и 5 месяцев",
    highlights: [
      "Various client projects — WordPress sites, custom apps, fixes",
      "Learned how to scope work and manage expectations",
      "Figured out that communication matters as much as code",
      "Built a foundation for the more complex work later",
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

        <p className="text-lg text-gray-400 mb-16 max-w-3xl">
          Where I&apos;ve worked and what I actually did there.
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
