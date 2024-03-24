import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/counter/counterSlice";

function Counter() {
  const [amount, setAmount] = useState(0);
  const countValue = useSelector((state) => {
    return state.counter.value;
  });
  const dispatch = useDispatch();

  return (
    <>
      <div>{countValue}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      <input
        type="number"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <button onClick={() => dispatch(incrementByAmount(amount))}>SA</button>
    </>
  );
}

export default Counter;
