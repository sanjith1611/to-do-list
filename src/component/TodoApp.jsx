import React from "react";

// TodoApp Component (previously TodoCard)
const TodoApp = ({ todo, onDelete, onEdit }) => {
  return (
    <div className="todo-card">
      <h3>{todo.task}</h3>
      <p>{todo.description}</p>
      <button onClick={() => onEdit(todo)} className="edit-btn">
        Edit
      </button>
      <button onClick={() => onDelete(todo.id)} className="delete-btn">
        Delete
      </button>
    </div>
  );
};

export default TodoApp;

