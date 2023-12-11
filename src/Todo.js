import React from "react";

function Todo({ todo }) {
  return (
    <div>
      <p>{todo}</p>
      <button>X</button>
    </div>
  );
}
export default Todo;
