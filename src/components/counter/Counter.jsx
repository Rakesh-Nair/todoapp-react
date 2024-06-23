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

function CounterButton({ by, incrementCount, decrementCount }) {
  function incrementCounterFunction() {
    setCount(count + by);
    incrementCount(by);
  }

  function decrementCounterFunction() {
    setCount(count - by);
    decrementCount(by);
  }

  const [count, setCount] = useState(0);
  return (
    <div className="Counter">
      <div>
        <button className="counterButton" onClick={incrementCounterFunction}>
          +{by}
        </button>
        <button className="counterButton" onClick={decrementCounterFunction}>
          -{by}
        </button>
      </div>
    </div>
  );
}

CounterButton.propTypes = {
  by: PropTypes.number,
};

CounterButton.defaultProps = {
  by: 1,
};
