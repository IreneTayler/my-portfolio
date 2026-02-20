import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import Filter from "./components/Filter"
import Projects from "./components/Projects";

function App() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Irene Tayler</h1>
        <p style={styles.subtitle}>Frontend Developer (React)</p>

        {/* About */}
        <section style={styles.section}>
          <h2>About Me</h2>
          <p>
            I'm a front-end developer developing React-based websites. I prioritize user experience and a rich UI.
          </p>
        </section>

        {/* Projects */}
        <section style={styles.section}>
          <h2>Projects</h2>

          <div style={styles.card}>
            <h3>Task Manager</h3>
            <p>React app with the ability to add, complete, and delete tasks</p>

            <div>
              <a
                href="https://task-manager-five-phi-15.vercel.app/"
                target="_blank"
                rel="noreferrer"
                style={styles.button}
              >
                Live Demo
              </a>

              <a
                href="https://github.com/IreneTayler/task-manager"
                target="_blank"
                rel="noreferrer"
                style={styles.buttonOutline}
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section style={styles.section}>
          <h2>Contact</h2>
          <p>Email: Irene19tayler@outlook.com</p>
          <p>GitHub: https://github.com/IreneTayler</p>
        </section>
      </div>
    </div>
  );
}

const styles = {
  page: {
    background: "#f5f6fa",
    minHeight: "100vh",
    padding: "40px 20px",
    fontFamily: "Arial",
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    background: "white",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
  },
  title: {
    marginBottom: "5px",
  },
  subtitle: {
    color: "#666",
    marginBottom: "30px",
  },
  section: {
    marginBottom: "40px",
  },
  card: {
    border: "1px solid #eee",
    padding: "20px",
    borderRadius: "8px",
  },
  button: {
    display: "inline-block",
    marginRight: "10px",
    padding: "8px 14px",
    background: "#0070f3",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
  },
  buttonOutline: {
    display: "inline-block",
    padding: "8px 14px",
    border: "1px solid #0070f3",
    color: "#0070f3",
    textDecoration: "none",
    borderRadius: "5px",
  },
};

export default App;