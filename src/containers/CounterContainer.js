import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { incrementCount, decrementCount, evenCount, oddCount, asyncCount } from "../actions/counterActions";

const CounterContainer = ({ dispatch, count }) => {
  const increment = () => {
    dispatch(incrementCount());
  };

  const decrement = () => {
    dispatch(decrementCount());
  };

  const even = () => {
    dispatch(evenCount())
  }

  const odd = () => {
    dispatch(oddCount())
  }

  const asyncX = () => {
    setTimeout(() => dispatch(asyncCount()), 1000);
    
  }

  return (
    <Counter
      value={count}
      onIncrement={increment}
      onDecrement={decrement}
      onEven={even}
      onOdd={odd}
      onAsync={asyncX}
    />
  );
}

// The component is connected to the redux store
export default connect(state => state)(CounterContainer);
