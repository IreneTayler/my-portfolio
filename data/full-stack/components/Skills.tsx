"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 90 },
  { name: "Tailwind CSS", level: 85 },
  { name: "React.js", level: 90 },
  { name: "Next.js", level: 80 },
  { name: "TypeScript", level: 80 },
  { name: "PHP (Laravel, Symfony)", level: 80 },
  { name: "Python (Django, Flask, FastAPI)", level: 80 },
  { name: "Vue.js", level: 70 },
  { name: "Node.js", level: 70 },
  { name: "Angular", level: 60 },
  { name: "Docker", level: 70 },
  { name: "PostgreSQL", level: 70 },
  { name: "MongoDB", level: 60 },
  { name: "MySQL", level: 80 },
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
          My Skills
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-black/30 rounded-lg p-5 flex flex-col items-center justify-center  transition-transform duration-300"
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










// "use client";

// import { motion } from "framer-motion";

// const skills = [
//   { name: "HTML5", level: 95 },
//   { name: "CSS3", level: 90 },
//   { name: "Tailwind", level: 85 },
//   { name: "Figma", level: 80 },
//   { name: "Next.js", level: 85 },
//   { name: "TypeScript", level: 80 },
//   { name: "JavaScript", level: 90 },
//   { name: "React.js", level: 90 },
//   { name: "Git&GitHub", level: 85 },
// ];

// const circleRadius = 50;
// const circleCircumference = 2 * Math.PI * circleRadius;

// const SkillsCircular = () => {
//   return (
//     <section
//       id="skills"
//       className="relative w-full py-20 bg-black/20 text-white px-6 md:px-12"
//     >
//       <div className="max-w-7xl mx-auto">
//         <motion.h2
//           className="text-3xl md:text-4xl font-bold text-center text-[#00ff88] mb-12 border-b pb-2"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           My Skills
//         </motion.h2>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
//           {skills.map((skill, index) => {
//             const strokeOffset = circleCircumference - (circleCircumference * skill.level) / 100;
//             return (
//               <motion.div
//                 key={skill.name}
//                 className="relative w-32 h-32 flex flex-col items-center justify-center rounded-full cursor-default"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 {/* Circular progress */}
//                 <svg className="w-32 h-32">
//                   <circle
//                     cx="50%"
//                     cy="50%"
//                     r={circleRadius}
//                     stroke="rgba(255,255,255,0.1)"
//                     strokeWidth="6"
//                     fill="none"
//                   />
//                   <motion.circle
//                     cx="50%"
//                     cy="50%"
//                     r={circleRadius}
//                     stroke="#00ff88"
//                     strokeWidth="6"
//                     fill="none"
//                     strokeLinecap="round"
//                     strokeDasharray={circleCircumference}
//                     strokeDashoffset={strokeOffset} 
//                     initial={{ strokeDashoffset: circleCircumference }}
//                     animate={{ strokeDashoffset: strokeOffset }}
//                     transition={{ duration: 1.5, ease: "easeInOut" }}
//                   />
//                 </svg>

//                 {/* Skill text */}
//                 <div className="absolute flex flex-col items-center justify-center">
//                   <span className="text-lg font-semibold text-[#00ff88]">{skill.name}</span>
//                   <span className="text-sm text-gray-300">{skill.level}%</span>
//                 </div>

//                 {/* Neon glow on hover */}
//                 <motion.div
//                   className="absolute w-32 h-32 rounded-full pointer-events-none"
//                   whileHover={{ boxShadow: "0 0 25px #00ff88, 0 0 50px #00ff88, 0 0 75px #00ff88" }}
//                   transition={{ duration: 0.3, ease: "easeInOut" }}
//                 />
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillsCircular;
