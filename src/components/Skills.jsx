import React from "react";
import "../store/global.css";
import "./Skills.css";

const skillsData = [
  {
    title: "Frontend",
    items: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Vite"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST API"],
  },
  {
    title: "Database",
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Vercel"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {skillsData.map((group) => (
            <div className="card skills-card" key={group.title}>
              <h3 className="skills-title">{group.title}</h3>

              <div className="skills-tags">
                {group.items.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;