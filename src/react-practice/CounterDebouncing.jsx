import React, { useState } from "react";

function CounterDebouncing() {
  // const [count, setCount] = useState();
  let count;
  function print() {
    let id;
    return function handclick(e) {
      console.log("id of each setTimeOut", id);
      count = e.target.value;
      clearInterval(id);

      id = setTimeout(() => {
        console.log(count, id);
      }, 3000);
    };
  }

  const handlechange = print();
  return (
    <div>
      {/* <button onClick={click}>increment</button>
      <p>{count}</p> */}
      <input type="text" value={count} onChange={handlechange}></input>
    </div>
  );
}

export default CounterDebouncing;
