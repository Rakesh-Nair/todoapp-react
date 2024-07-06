import { useState } from "react";
import { PropTypes } from "prop-types";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  function incrementCount(by) {
    setCount(count + by);
  }

  function decrementCount(by) {
    setCount(count - by);
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
    </div>
  );
}
