import React, { useState } from "react";
import "./AddTodo.css";

function AddTodo({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onAddTodo(newTodo);
    setNewTodo("");
  }
  return (
    <div>
      <label>Add Todos</label>
      <input
        onChange={(event) => setNewTodo(event.target.value)}
        value={newTodo}
        type="text"
        placeholder="Write todo..."
      />
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
}
export default AddTodo;