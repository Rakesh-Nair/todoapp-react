import "./Counter.css";
import { useState } from "react";
import CounterButton from "./CounterButton";

export default function Counter() {
  const [count, setCount] = useState(0);

  function incrementCount(by) {
    setCount(count + by);
  }

  function decrementCount(by) {
    setCount(count - by);
  }

  function resetCounter() {
    setCount(0);
  }
  return (
    <div>
      <span className="parentCount">{count}</span>
      <CounterButton
        by={1}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
      />
      <CounterButton
        by={2}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
      />
      <CounterButton
        by={5}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
      />
      <button className="resetButton" onClick={resetCounter}>
        Reset
      </button>
    </div>
  );
}
