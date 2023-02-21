import { useState } from "react";

const Task2 = (props) => {
  const [idValue, setIdValue] = useState(0);

  const fetchData = () => {
    fakeRequest(idValue);
  };

  const submitHandler = () => {
    fetchData();
  };

  const inputChangeHandler = (ev) => {
    setIdValue(ev.target.value);
  };
  console.log(idValue);

  return (
    <div>
      <button onClick={submitHandler}>Submit</button>
      <input type="number" onChange={inputChangeHandler} value={idValue} />
    </div>
  );
};

export default Task2;

async function fakeRequest(id) {
  await new Promise((res) => {
    setTimeout(() => {
      res(1);
    }, 200);
  });

  console.log("Id in request is:", id);
