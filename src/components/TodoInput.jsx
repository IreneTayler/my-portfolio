import { useState } from "react"
import { useTodoStore } from "../store/todoStore"

const TodoInput = () => {
  const [text, setText] = useState("")
  const addTodo = useTodoStore((state) => state.addTodo)

  const handleAdd = () => {
    if (!text.trim()) return
    addTodo(text)
    setText("")
  }

  return (
    <div style={styles.container}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task..."
        style={styles.input}
      />
      <button onClick={handleAdd} style={styles.button}>
        Add
      </button>
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #1e293b",
    background: "#020617",
    color: "white"
  },
  button: {
    padding: "10px 16px",
    borderRadius: "6px",
    border: "none",
    background: "#38bdf8",
    fontWeight: "bold",
    cursor: "pointer"
  }
}

export default TodoInput