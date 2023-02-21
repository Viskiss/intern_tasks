import { useState } from "react";

const Task1 = () => {
  const [state, setState] = useState(false);

  const toggler = () => {
    if(!state) {
      setState(true);
    } else {
      setState(false)
    }
  };

  return (
    <button onClick={toggler} style={{ background: state ? "red" : "blue" }}>
    Click Me
  </button>
  );
};


export default Task1;