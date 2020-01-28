import React from "react";

const Counter = ({ value, onIncrement, onDecrement, onEven, onOdd, onAsync }) => (
  // const asyncCall = () => {
  //   setTimeout(1000)
  //   callFunction()
  // }
  <div>
    <p>value: {value}</p>
    <p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <br />
      <button onClick={onEven}>+ if Even</button>
      <button onClick={onOdd}>+ if Odd</button>
      <button onClick={onAsync}>+ Async</button>
    </p>
  </div>
);

export default Counter;
