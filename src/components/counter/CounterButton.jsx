import { PropTypes } from "prop-types";
//import { useState } from "react";

export default function CounterButton({ by, incrementCount, decrementCount }) {
  //   function incrementCounterFunction() {
  //     //setCount(count + by);
  //     incrementCount(by);
  //   }

  //   function decrementCounterFunction() {
  //     //setCount(count - by);
  //     decrementCount(by);
  //   }

  //const [count, setCount] = useState(0);
  return (
    <div className="Counter">
      <div>
        <button className="counterButton" onClick={() => incrementCount(by)}>
          +{by}
        </button>
        <button className="counterButton" onClick={() => decrementCount(by)}>
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
