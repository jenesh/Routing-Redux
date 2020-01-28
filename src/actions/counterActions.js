import { INCREMENT, DECREMENT, EVEN, ODD, ASYNC } from "./actionTypes";

export const incrementCount = () => {
  return { type: INCREMENT };
};

export const decrementCount = () => {
  return { type: DECREMENT };
};

export const evenCount= () => {
  return { type: EVEN };
};

export const oddCount = () => {
  return { type: ODD };
};

export const asyncCount = () => {
  return { type: ASYNC };
};