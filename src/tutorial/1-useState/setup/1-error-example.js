import React from "react";

const ErrorExample = () => {
  let title = "Welcome to React";

  const handleClick = () => {
    title = "Goodbye";
    console.log(title);
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
