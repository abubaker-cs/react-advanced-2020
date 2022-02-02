import React, { useState } from "react";

// Basic Rules for Hooks
// =======================================
// 1. Must start with use
// 2. component name must be uppercase
// 3. must be in the function/component body
// 4. cannot call conditionally

const UseStateBasics = () => {
  // console.log(useState("hello world"));

  // const value = useState(1)[0];
  // const handler = useState(1)[0];
  // console.log(value, handler);

  const [text, setText] = useState("random title");

  const handleClick = () => {
    if (text === "random title") {
      setText("New Value");
    } else {
      setText("random title");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
