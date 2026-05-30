"use client";

import { motion } from "framer-motion";
import { FaSearch, FaCode, FaBug, FaRocket, FaRobot, FaBrain } from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch size={24} />,
    title: "Analyze & Plan",
    description:
      "I start every task by breaking it into atomic steps, identifying dependencies, and choosing the right stack. I research similar solutions, document requirements, and define clear acceptance criteria before writing any code.",
  },
  {
    icon: <FaCode size={24} />,
    title: "Develop & Iterate",
    description:
      "I build in focused increments: scaffold the structure first, then layer in logic and styling. I use TypeScript for type safety, reusable components for maintainability, and Tailwind for rapid, consistent UI.",
  },
  {
    icon: <FaBug size={24} />,
    title: "Test & Refine",
    description:
      "I validate across devices and browsers, check accessibility, run ESLint, and test API edge cases. Performance metrics (Core Web Vitals) guide final optimizations.",
  },
  {
    icon: <FaRocket size={24} />,
    title: "Deploy & Monitor",
    description:
      "I deploy via CI/CD pipelines, verify production behavior, and set up basic monitoring. Post-launch feedback loops drive continuous improvement.",
  },
];

const aiTools = [
  {
    icon: <FaRobot size={22} />,
    title: "Code Generation & Review",
    description:
      "I use ChatGPT and GitHub Copilot to scaffold boilerplate, suggest algorithms, and catch logical errors. This cuts repetitive coding time by ~40% and lets me focus on architecture.",
  },
  {
    icon: <FaBrain size={22} />,
    title: "Architecture & Debugging",
    description:
      "When stuck on complex state management or API design, I describe the problem to an AI assistant, explore alternative patterns, and validate trade-offs before committing to a solution.",
  },
];

const WorkApproach = () => {
  return (
    <section id="approach" className="relative w-full py-20 bg-black/30 text-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[#00ff88] mb-4">How I Work</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            My approach is systematic: understand deeply, build iteratively, test rigorously, and ship confidently.
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="bg-black/40 rounded-xl border border-[#00ff88]/20 p-6 hover:border-[#00ff88]/60 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-[#00ff88] mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* AI in Workflow */}
        <motion.div
          className="rounded-2xl border border-[#00ff88]/30 bg-black/40 p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FaRobot className="text-[#00ff88] text-2xl" />
            <h3 className="text-2xl font-bold text-white">AI in My Workflow</h3>
          </div>
          <p className="text-gray-300 mb-8 max-w-3xl">
            I treat AI as a senior pair programmer, not a replacement. It accelerates exploration,
            reduces boilerplate fatigue, and catches blind spots — while I retain full ownership of architecture and quality.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiTools.map((tool, index) => (
              <motion.div
                key={tool.title}
                className="flex gap-4 bg-[#0b1a1a] rounded-xl p-5 border border-white/10"
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="text-[#00ff88] mt-1 shrink-0">{tool.icon}</div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{tool.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{tool.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkApproach;
