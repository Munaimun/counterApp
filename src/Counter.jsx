import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  //for minus button
  function decreaseHandler() {
    setCount(count - 1);
  }

  //for plus button
  function increaseHandler() {
    setCount(count + 1);
  }

  //for reset
  function resetHandler() {
    setCount(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="font-bold">Increment & Decrement</div>
      <div className="bg-white flex justify-center gap-12 py-3 rounded-small text-[25px] text-[#344151]">
        <button
          className="bg-white border-r-2-b text-center w-20 border-none text-5xl"
          onClick={decreaseHandler}
        >
          -
        </button>
        <div className="font-bold gap-12 text-5xl">{count}</div>
        <button
          className="bg-white border-l-2 text-center w-20 border-none text-5xl"
          onClick={increaseHandler}
        >
          +
        </button>
      </div>
      <button onClick={resetHandler}>reset</button>
    </div>
  );
};

export default Counter;
