import { create } from "zustand"

export const useTodoStore = create((set, get) => ({
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  filter: "all",

  saveTodos: (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  },

  addTodo: (text) => {
    const newTodos = [
      ...get().todos,
      { id: Date.now(), text, completed: false }
    ]
    get().saveTodos(newTodos)
    set({ todos: newTodos })
  },

  toggleTodo: (id) => {
    const newTodos = get().todos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    )
    get().saveTodos(newTodos)
    set({ todos: newTodos })
  },

  deleteTodo: (id) => {
    const newTodos = get().todos.filter((todo) => todo.id !== id)
    get().saveTodos(newTodos)
    set({ todos: newTodos })
  },

  setFilter: (filter) => set({ filter })
}))