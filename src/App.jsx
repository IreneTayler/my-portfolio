import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import Filter from "./components/Filter"

function App() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Task Manager</h1>
        <p style={styles.subtitle}>Manage your daily tasks efficiently</p>

        <TodoInput />
        <Filter />
        <TodoList />
      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#020617",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif"
  },
  card: {
    width: "420px",
    background: "#0f172a",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
    color: "white"
  },
  title: {
    textAlign: "center",
    marginBottom: "5px"
  },
  subtitle: {
    textAlign: "center",
    fontSize: "14px",
    opacity: 0.7,
    marginBottom: "25px"
  }
}

export default App