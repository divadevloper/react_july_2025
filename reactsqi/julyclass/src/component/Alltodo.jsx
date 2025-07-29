import React from "react";
import { useState } from "react";

const Alltodo = ({ addtodo }) => {
  const [newTodo, setnewTodo] = useState("");

  return (
    <>
      <div>
        <input
          type="text"
          name=""
          onChange={(e) => setnewTodo(e.target.value)}
          id=""
        />
        <button onClick={() => addtodo(newTodo)}>Add</button>
      </div>
    </>
  );
};

export default Alltodo;
