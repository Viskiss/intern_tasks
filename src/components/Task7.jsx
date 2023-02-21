import React from "react";
import { useMemo } from "react";

const listOfItems = Array(4)
  .fill(1)
  .map((_, idx) => {
    if (idx % 2) {
      return {
        name: "Im hidden",
        status: "block",
      };
    }
    return {
      name: "See me",
      status: "active",
    };
  });

const Task7 = (props) => {
  const [status, setStatus] = React.useState("active");
  let myVisibleElements = listOfItems;

  myVisibleElements = useMemo(() => {
    return listOfItems.filter((i) => i.status === status);
  }, [status]);

  const toggleStatus = () => {
    setStatus(status === "active" ? "block" : "active");
    console.log(status);
  };

  return (
    <div>
      <button onClick={toggleStatus}>ddddd</button>
      {myVisibleElements.map((item, idx) => (
        <p key={idx}>{item.name}</p>
      ))}
    </div>
  );
};

export default Task7;
