function App() {
  return (
    <div className="page">
      <div className="container">
        <header className="header">
          <h1>Irene Tayler</h1>
          <p>Frontend Developer — React</p>
        </header>

        <section className="section">
          <h2>About</h2>
          <p>
            Frontend developer specializing in React and modern JavaScript.
            I build clean, responsive, and user-focused web applications with
            attention to simplicity and maintainable code.
          </p>
        </section>

        <section className="section">
          <h2>Projects</h2>

          <div className="project">
            <h3>Task Manager</h3>
            <p>
              A minimal task management app built with React. Users can add,
              complete, and delete tasks.
            </p>

            <div className="links">
              <a
                href="https://task-manager-five-phi-15.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
              <a
                href="https://github.com/IreneTayler/task-manager"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        </section>

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
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px 20px;
        }

        .container {
          max-width: 800px;
          width: 100%;
        }

        .header h1 {
          font-size: 40px;
          margin-bottom: 8px;
        }

        .header p {
          color: #94a3b8;
          margin-bottom: 40px;
        }

        .section {
          margin-bottom: 40px;
        }

        .section h2 {
          font-size: 20px;
          margin-bottom: 16px;
          border-bottom: 1px solid #1e293b;
          padding-bottom: 6px;
        }

        .project {
          background: #111827;
          padding: 20px;
          border-radius: 10px;
          border: 1px solid #1f2937;
        }

        .project h3 {
          margin-top: 0;
        }

        .links a {
          margin-right: 16px;
          color: #60a5fa;
          text-decoration: none;
        }

        .links a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

export default App;