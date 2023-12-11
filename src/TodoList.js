import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  return (
    <div>
      <AddTodo onAddTodo={addTodo} />
      {todos.map((todo) => (
        <Todo todo={todo} key={todo} />
      ))}
    </div>
  );
}

export default TodoList;
