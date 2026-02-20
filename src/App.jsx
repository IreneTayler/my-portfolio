import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import Filter from "./components/Filter"
import Projects from "./components/Projects";

function App() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Header */}
        <h1 style={styles.name}>Irene Tayler</h1>
        <p style={styles.role}>React Developer</p>

        {/* About */}
        <section style={styles.section}>
          <h2>About Me</h2>
          <p>
            Frontend developer specializing in React. 
            I build clean, responsive, and user-friendly web applications.
          </p>
        </section>

        {/* Skills */}
        <section style={styles.section}>
          <h2>Skills</h2>
          <ul>
            <li>React</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML / CSS</li>
            <li>Vite</li>
            <li>Git / GitHub</li>
          </ul>
        </section>

        {/* Projects */}
        <section style={styles.section}>
          <h2>Projects</h2>

          <div style={styles.projectCard}>
            <h3>Task Manager</h3>
            <p>
              A simple task management app built with React.
              Features include adding, completing, and deleting tasks.
            </p>

            <a
              href="https://task-manager-five-phi-15.vercel.app/"
              target="_blank"
              rel="noreferrer"
              style={styles.button}
            >
              Live Demo
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f5f6fa",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    background: "#fff",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
  },
  name: {
    marginBottom: "5px",
  },
  role: {
    color: "#666",
    marginBottom: "30px",
  },
  section: {
    marginBottom: "30px",
  },
  projectCard: {
    border: "1px solid #eee",
    padding: "20px",
    borderRadius: "8px",
  },
  button: {
    display: "inline-block",
    marginTop: "10px",
    padding: "10px 15px",
    background: "#0070f3",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
  },
};

export default App;