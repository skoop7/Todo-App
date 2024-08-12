/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

function TodoList({ todos, onEdit, onDelete }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TodoList;
