import { useTodoStore } from "../store/todoStore"

const TodoItem = ({ todo }) => {
  const toggleTodo = useTodoStore((state) => state.toggleTodo)
  const deleteTodo = useTodoStore((state) => state.deleteTodo)

  return (
    <div style={styles.item}>
      <span
        onClick={() => toggleTodo(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer"
        }}
      >
        {todo.text}
      </span>

        <button
            onClick={() => deleteTodo(todo.id)}
            style={{
                background: "transparent",
                border: "none",
                color: "#ef4444",
                cursor: "pointer"
            }}
            >
            Delete
        </button>
    </div>
  )
}

const styles = {
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    marginBottom: "8px",
    background: "#020617",
    borderRadius: "6px",
    border: "1px solid #1e293b"
  }
}

export default TodoItem