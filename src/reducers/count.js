import { INCREMENT, DECREMENT, EVEN, ODD, ASYNC } from "../actions/actionTypes";

export default (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case EVEN:
      return state % 2 === 0 ? state + 1 : state
    case ODD:
      return state % 2 === 1 ? state + 1 : state
    case ASYNC:
      return state + 1;
    default:
      return state;
  }
};
