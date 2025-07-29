import React from "react";

const Button = ({ sayhello, style, name }) => {
  return (
    <>
      <button onClick={sayhello} className={style}>
        {name}
      </button>
    </>
  );
};

export default Button;
