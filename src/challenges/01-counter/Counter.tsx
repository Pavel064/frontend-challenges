import { useState } from "react";
import "./Counter.css";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <p>
        Task: Create a counter with two buttons (+/-) and the ability to{" "}
        <span
          onClick={() => setCount(0)}
          style={{ color: "#b22222", cursor: "pointer" }}
        >
          reset
        </span>{" "}
        the value to 0
      </p>

      <div className="count-block">
        <button className="btn-square" onClick={() => setCount(count - 1)}>
          &minus;
        </button>
        <div style={{ cursor: "default" }}>{count}</div>
        <button className="btn-square" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </>
  );
};
