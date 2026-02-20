import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import Filter from "./components/Filter"
import Projects from "./components/Projects";

function App() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.name}>Irene Tayler</h1>
        <p style={styles.role}>Frontend Developer (React)</p>

        {/* About */}
        <section style={styles.section}>
          <h2>About Me</h2>
          <p>
            I am a frontend developer specializing in React and modern JavaScript. 
            I focus on building clean, responsive, and user-friendly web applications.
            
            I enjoy turning ideas into real products and continuously improving my skills through hands-on projects. 
            I am passionate about writing maintainable code, learning new technologies, and growing as a professional developer.
          </p>
        </section>

        {/* Skills */}
        <section style={styles.section}>
          <h2>Skills</h2>
          <div style={styles.skills}>
            <span style={styles.tag}>React</span>
            <span style={styles.tag}>JavaScript</span>
            <span style={styles.tag}>HTML</span>
            <span style={styles.tag}>CSS</span>
            <span style={styles.tag}>Git</span>
            <span style={styles.tag}>Vite</span>
          </div>
        </section>

        {/* Projects */}
        <section style={styles.section}>
          <h2>Projects</h2>

          <div style={styles.project}>
            <h3>Task Manager</h3>
            <p>
              A simple task management application built with React. 
              Users can add, complete, and delete tasks.
            </p>

            <div style={styles.buttons}>
              <a
                href="https://task-manager-five-phi-15.vercel.app/"
                target="_blank"
                rel="noreferrer"
                style={styles.primaryBtn}
              >
                Live Demo
              </a>

              <a
                href="https://github.com/IreneTayler/task-manager"
                target="_blank"
                rel="noreferrer"
                style={styles.secondaryBtn}
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section style={styles.section}>
          <h2>Contact</h2>
          <p>Email: Irene19tyaler@outlook.com</p>
          <p>GitHub: https://github.com/IreneTayler</p>
        </section>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "white",
    maxWidth: "800px",
    width: "100%",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
  name: {
    marginBottom: "5px",
  },
  role: {
    color: "#666",
    marginBottom: "30px",
  },
  section: {
    marginBottom: "35px",
  },
  skills: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  tag: {
    background: "#f1f3f5",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "14px",
  },
  project: {
    border: "1px solid #eee",
    padding: "20px",
    borderRadius: "10px",
  },
  buttons: {
    marginTop: "10px",
  },
  primaryBtn: {
    background: "#667eea",
    color: "white",
    padding: "8px 16px",
    borderRadius: "6px",
    textDecoration: "none",
    marginRight: "10px",
  },
  secondaryBtn: {
    border: "1px solid #667eea",
    color: "#667eea",
    padding: "8px 16px",
    borderRadius: "6px",
    textDecoration: "none",
  },
};

export default App;