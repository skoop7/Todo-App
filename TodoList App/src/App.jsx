import { useState } from "react";
import Header from "./Components/Header";
import "./Components/style.css";
import TodoList from "./Components/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  function addTodo() {
    if (input.trim() !== "") {
      if (editId !== null) {
        setTodos(
          todos.map((todo) =>
            todo.id === editId ? { ...todo, text: input } : todo
          )
        );
        setEditId(null);
      } else {
        setTodos([...todos, { id: Date.now(), text: input }]);
      }
      setInput("");
    }
  }

  function handleEdit(id) {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setInput(todoToEdit.text);
      setEditId(id);
    }
  }

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <Header />
      <div className="input-div">
        <input
          type="text"
          placeholder="Enter your task here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input-bar"
        />
        <button className="add-btn" onClick={addTodo}>
          {editId !== null ? "Update Task" : "Add Task"}
        </button>
      </div>
      <TodoList todos={todos} onEdit={handleEdit} onDelete={handleDelete} />
    </>
  );
}

export default App;
