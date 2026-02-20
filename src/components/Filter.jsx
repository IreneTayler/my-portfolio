import { useTodoStore } from "../store/todoStore"

const Filter = () => {
  const setFilter = useTodoStore((state) => state.setFilter)

  return (
   <div style={styles.container}>
        <button style={styles.button} onClick={() => setFilter("all")}>All</button>
        <button style={styles.button} onClick={() => setFilter("active")}>Active</button>
        <button style={styles.button} onClick={() => setFilter("completed")}>Completed</button>
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px"
  },
  button: {
    padding: "6px 12px",
    borderRadius: "6px",
    border: "1px solid #1e293b",
    background: "transparent",
    color: "white",
    cursor: "pointer"
  }
}
export default Filter