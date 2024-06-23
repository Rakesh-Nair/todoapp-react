import { useState } from "react";
import "./Counter.css";
export default function Counter() {
  function incrementCounterFunction() {
    setCount(count + 1);
  }

  const [count, setCount] = useState(0);
  return (
    <div className="Counter">
      <span className="count">{count}</span>
      <div>
        <button className="counterButton" onClick={incrementCounterFunction}>
          +1
        </button>
      </div>
    </div>
  );
}
