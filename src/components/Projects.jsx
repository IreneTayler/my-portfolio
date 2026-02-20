function Projects() {
  const projects = [
    {
      title: "Task Manager",
      description: "A simple task management app built with React and Vite.",
      live: "https://task-manager-five-phi-15.vercel.app/",
      github: "https://github.com/IreneTayler/task-manager"
    }
  ];

  return (
    <section>
      <h2>My Projects</h2>

      {projects.map((project, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>

          <a href={project.live} target="_blank">
            Live Demo
          </a>
          <br />
          <a href={project.github} target="_blank">
            GitHub
          </a>
        </div>
      ))}
    </section>
  );
}

export default Projects;