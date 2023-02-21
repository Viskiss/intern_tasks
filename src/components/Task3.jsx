import { useEffect, useMemo, useState } from "react";
import { useRef } from "react";
import styles from "./Task3.module.scss";

const Task3 = () => {
  const elementRef = useRef();

  const [width, setWidth] = useState();

  useEffect(() => {
    const elementWidth = elementRef;
    console.log(elementWidth.current);
    setWidth(elementWidth.current.clientWidth);
  }, [elementRef]);

  const handleButtonClick = () => {
    if (width >= 100) {
      elementRef.current.classList.add(styles.blue);
    } else {
      elementRef.current.classList.add(styles.green);
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Click</button>
      <div className={styles.box} ref={elementRef}>
        Box
      </div>
    </div>
  );
};

export default Task3;
