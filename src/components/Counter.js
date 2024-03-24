import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter/counterSlice";

function Counter() {
  const countValue = useSelector((state) => {
    return state.counter.value;
  });
  const dispatch = useDispatch();

  return (
    <>
      <div>{countValue}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
}

export default Counter;
