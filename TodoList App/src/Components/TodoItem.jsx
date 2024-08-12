/* eslint-disable react/prop-types */
import "./style.css";

function TodoItem({ todo, onEdit, onDelete }) {
  return (
    <div className="todo-item-container">
      <div className="todo-item">
        <li>{todo.text}</li>
        <div>
          <button className="edit-btn" onClick={() => onEdit(todo.id)}>
            Edit
          </button>
          <button className="delete-btn" onClick={() => onDelete(todo.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
