import React from "react";

const Displaytodo = ({ displaytodo }) => {
  return (
    <>
      <div>
        {displaytodo.map((item) => (
          <div>
            <li>{item}</li>
          </div>
        ))}
      </div>
    </>
  );
};

export default Displaytodo;
