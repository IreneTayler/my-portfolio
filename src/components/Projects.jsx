import "./Projects.css";

const projects = [
  {
    title: "Task Manager",
    image: "/task.png",
    description:
      "Built a production-ready task management application designed to handle large task lists efficiently. Implemented reusable component architecture, advanced filtering, and status-based organization to improve usability. Optimized performance using memoization and efficient state management, ensuring smooth rendering even with high data volume.",
    tech: ["React", "TypeScript", "LocalStorage / API", "Component Architecture"],
    live: "https://your-live-link.com",
    github: "https://github.com/your-repo",
  },
  {
    title: "Authentication & User Dashboard",
    image: "/dashboard.png",
    description:
      "Developed a full-stack user authentication system with secure login, registration, and protected routes. Designed REST APIs and implemented token-based authentication to manage user sessions. Built a responsive dashboard with role-based access and optimized API communication to reduce unnecessary requests.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    live: "#",
    github: "#",
  },
  {
    title: "E-Commerce Admin Dashboard",
    image: "/portfolio.png",
    description:
      "Built an admin dashboard for managing products, orders, and inventory with full CRUD functionality. Implemented dynamic data tables, search, and pagination to improve data handling efficiency. Designed a scalable structure with reusable UI components and optimized loading performance for better user experience.",
    tech: ["React", "REST API", "Pagination", "Search", "Component Design"],
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            {/* Image */}
            <div className="project-image">
              <img src={project.image} alt={project.title} />

              <div className="overlay">
                <a href={project.live} target="_blank">Live</a>
                <a href={project.github} target="_blank">GitHub</a>
              </div>
            </div>

            {/* Content */}
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}