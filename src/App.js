import React from 'react'
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incByValue } from "./slice";

export default function App() {
  const data = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={() => dispatch(decrement())}>deccrement</button>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(incByValue(10))}>incByValue</button>
    </div>
  );
}
