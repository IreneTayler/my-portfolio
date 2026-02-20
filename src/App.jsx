function App() {
  return (
    <div className="page">
      <div className="container">

        {/* Hero */}
        <section className="hero fadeUp">
          <img src="/profile.jpg" alt="profile" className="photo" />

          <div>
            <h1>Irene Tayler</h1>
            <p className="role">Frontend Developer (React)</p>
            <p className="intro">
              I build modern, responsive web applications with React.
              Passionate about clean UI, great user experience, and continuous growth.
            </p>

            <div className="heroButtons">
              <a href="https://github.com/IreneTayler" target="_blank">GitHub</a>
              <a href="mailto:your-email@example.com">Contact</a>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="section fadeUp delay1">
          <h2>About Me</h2>
          <p>
            I am a frontend developer specializing in React and modern JavaScript.
            I focus on building clean, maintainable, and user-friendly web applications.
          </p>
          <p>
            After graduating in 2021 with a degree in Software Engineering,
            I strengthened my frontend skills by building real-world projects
            and learning modern technologies.
          </p>
        </section>

        {/* Skills */}
        <section className="section fadeUp delay2">
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
        <section className="section fadeUp delay3">
          <h2>Projects</h2>

          <div className="project">
            <h3>Task Manager</h3>
            <p>
              A task management application built with React.
              Users can add, complete, and delete tasks.
            </p>

            <div className="links">
              <a
                href="https://task-manager-five-phi-15.vercel.app/"
                target="_blank"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/IreneTayler/task-manager"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="section fadeUp delay4">
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

        /* Hero */
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
        }

        .intro {
          color: #cbd5f5;
          margin: 10px 0 15px;
        }

        .heroButtons a {
          margin-right: 15px;
          color: #60a5fa;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .heroButtons a:hover {
          opacity: 0.7;
        }

        /* Sections */
        .section {
          margin-bottom: 40px;
        }

        .section h2 {
          border-bottom: 1px solid #1f2937;
          padding-bottom: 6px;
          margin-bottom: 16px;
        }

        /* Skills */
        .skills span {
          background: #111827;
          padding: 6px 12px;
          margin-right: 10px;
          border-radius: 20px;
          border: 1px solid #1f2937;
          transition: transform 0.2s;
        }

        .skills span:hover {
          transform: translateY(-3px);
        }

        /* Project Card */
        .project {
          background: #111827;
          padding: 20px;
          border-radius: 10px;
          border: 1px solid #1f2937;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .project:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }

        .links a {
          margin-right: 16px;
          color: #60a5fa;
          text-decoration: none;
        }

        /* Animation */
        .fadeUp {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.6s ease forwards;
        }

        .delay1 { animation-delay: 0.2s; }
        .delay2 { animation-delay: 0.4s; }
        .delay3 { animation-delay: 0.6s; }
        .delay4 { animation-delay: 0.8s; }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default App;