function App() {
  return (
    <div className="page">
      <div className="container">

        {/* Hero */}
        <section className="hero">
          <img src="/profile.jpg" alt="profile" className="photo" />

          <div>
            <h1>Irene Tayler</h1>
            <p className="role">Frontend Developer (React)</p>
            <p className="intro">
              I build modern, responsive web applications with React.
              Passionate about clean UI, user experience, and continuous growth.
            </p>

            <div className="heroButtons">
              <a href="https://github.com/IreneTayler" target="_blank">GitHub</a>
              <a href="mailto:your-email@example.com">Contact</a>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="section">
          <h2>About Me</h2>
          <p>
            I am a frontend developer specializing in React and modern JavaScript.
            I focus on building clean, maintainable, and user-friendly web applications.
          </p>

          <p>
            After graduating with a degree in Software Engineering in 2021,
            I focused on strengthening my frontend development skills by building
            real-world projects and learning modern web technologies.
          </p>

          <p>
            I enjoy turning ideas into real products and continuously improving my
            technical skills. My goal is to grow as a professional frontend developer
            and contribute to meaningful products.
          </p>
        </section>

        {/* Skills */}
        <section className="section">
          <h2>Skills</h2>
          <div className="skills">
            <span>React</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Git</span>
            <span>Vite</span>
          </div>
        </section>

        {/* Projects */}
        <section className="section">
          <h2>Projects</h2>

          <div className="project">
            <h3>Task Manager</h3>
            <p>
              A task management application built with React.
              Users can add, complete, and delete tasks.
            </p>

            <div className="links">
              <a href="https://task-manager-five-phi-15.vercel.app/" target="_blank">
                Live Demo
              </a>
              <a href="https://github.com/IreneTayler/task-manager" target="_blank">
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="section">
          <h2>Contact</h2>
          <p>Email: your-email@example.com</p>
          <p>GitHub: github.com/IreneTayler</p>
        </section>

      </div>

      <style>{`
        body {
          margin: 0;
          background: #0f172a;
          color: #e5e7eb;
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .page {
          display: flex;
          justify-content: center;
          padding: 60px 20px;
        }

        .container {
          max-width: 900px;
          width: 100%;
        }

        .hero {
          display: flex;
          gap: 30px;
          align-items: center;
          margin-bottom: 50px;
        }

        .photo {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #1f2937;
        }

        .role {
          color: #94a3b8;
          margin-bottom: 10px;
        }

        .intro {
          color: #cbd5f5;
          margin-bottom: 15px;
        }

        .heroButtons a {
          margin-right: 15px;
          color: #60a5fa;
          text-decoration: none;
        }

        .section {
          margin-bottom: 40px;
        }

        .section h2 {
          border-bottom: 1px solid #1f2937;
          padding-bottom: 6px;
          margin-bottom: 16px;
        }

        .skills span {
          background: #111827;
          padding: 6px 12px;
          margin-right: 10px;
          border-radius: 20px;
          border: 1px solid #1f2937;
        }

        .project {
          background: #111827;
          padding: 20px;
          border-radius: 10px;
          border: 1px solid #1f2937;
        }

        .links a {
          margin-right: 16px;
          color: #60a5fa;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}

export default App;