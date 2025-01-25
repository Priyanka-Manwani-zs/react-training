import React from "react";

function Throttlilng() {
  function Print() {
    let arr = [];
    let id;
    let time;

    return function handleonChange() {
      const curretTime = Date.now();
      if (arr.length == 0) {
        arr.push(curretTime);
        console.log("initial time", curretTime);
      }
      if (time && curretTime - time >= 3000) {
        clearTimeout(id);
        console.log(arr[length - 1]);
        arr.length = 0;
      }
      id = setTimeout(() => {
        time = Date.now();
        arr.push(time);
      }, 3000);

      console.log("length of the arry", arr.length);
    };
  }

  let handle = Print();

  return (
    <div>
      <button onClick={handle}> click</button>
    </div>
  );
}

export default Throttlilng;
