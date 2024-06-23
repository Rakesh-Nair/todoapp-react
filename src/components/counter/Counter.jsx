import "./Counter.css";
export default function Counter() {
  function incrementCounterFunction() {
    console.log("Increment Clicked");
  }

  //   const buttonStyle = {
  //     fontSize:"15px",
  //     backgroundColor:"green",
  //     width:"100px",
  //     margin:"10px",
  //     color:"white",
  //     padding:"15px",
  //     borderRadius:"30px˙"
  //   };
  return (
    <div className="Counter">
      <span className="count">0</span>
      <div>
        <button className="counterButton" onClick={incrementCounterFunction}>
          +1
        </button>
      </div>
    </div>
  );
}
