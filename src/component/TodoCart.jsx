import React, { useState } from "react";
import TodoApp from "./TodoApp"; 
import "../App.css";

const TodoCart = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);

  // Handle add/edit task
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTodo) {
      // Edit existing todo
      const updatedTodos = todos.map((todo) =>
        todo.id === editingTodo.id
          ? { ...todo, task, description }
          : todo
      );
      setTodos(updatedTodos);
      setEditingTodo(null);
    } else {
      // Add new todo
      setTodos([
        ...todos,
        { id: Date.now(), task, description },
      ]);
    }
    setTask("");
    setDescription("");
  };

  // Handle edit task
  const handleEdit = (todo) => {
    setTask(todo.task);
    setDescription(todo.description);
    setEditingTodo(todo);
  };

  // Handle delete task
  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Todo List</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Task Name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="input"
          required
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea"
          required
        ></textarea>
        <button type="submit" className="submit-btn">
          {editingTodo ? "Update Task" : "Add Task"}
        </button>
      </form>

      <div className="todo-list">
        {todos.map((todo) => (
          <TodoApp
            key={todo.id}
            todo={todo}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoCart;
