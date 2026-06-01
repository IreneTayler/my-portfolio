"use client";

import { motion } from "framer-motion";

const CoreSkills = [
  { name: "JavaScript", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "React.js", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Vue.js", level: 85 },
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 90 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Node.js", level: 85 },
  { name: "PHP", level: 80 },
  { name: "Python / FastAPI", level: 75 },
  { name: "MySQL", level: 80 },
];

const skills = [
  { name: "REST API Design", level: 85 },
  { name: "Git / GitLab / CI-CD", level: 85 },
  { name: "Docker", level: 80 },
  { name: "Convex (Database)", level: 75 },
  { name: "Figma to Code", level: 85 },
  { name: "Responsive Design", level: 90 },
  { name: "WordPress", level: 75 },
  { name: "Performance Optimization", level: 80 },
  { name: "AI Tools (ChatGPT, Copilot)", level: 85 },
];

const Skills = () => {
  return (
    <section id="skills" className="relative w-full py-20 bg-black/40 text-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-center text-[#00ff88] mb-12 border-b pb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Core Skills
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CoreSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-black/30 rounded-lg p-5 flex flex-col items-center justify-center transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-md font-semibold text-[#00ff88]">{skill.name}</h3>
              
              {/* Skill Bar */}
              <div className="w-full h-1.5 bg-[#45556c] rounded-full overflow-hidden">
                <motion.div
                  className="h-1.5 bg-[#00ff88] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  viewport={{ once: true }}
                />
              </div>

              <span className="mt-2 text-sm text-gray-300">{skill.level}%</span>
            </motion.div>
          ))}
        </div>


         {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-center text-[#00ff88] mb-12 border-b pb-2 mt-25"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Additional Skills
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-black/30 rounded-lg p-5 flex flex-col items-center justify-center transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-md font-semibold text-[#00ff88]">{skill.name}</h3>
              
              {/* Skill Bar */}
              <div className="w-full h-1.5 bg-[#45556c] rounded-full overflow-hidden">
                <motion.div
                  className="h-1.5 bg-[#00ff88] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  viewport={{ once: true }}
                />
              </div>

              <span className="mt-2 text-sm text-gray-300">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
