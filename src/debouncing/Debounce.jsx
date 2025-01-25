import React from "react";

function Debounce() {
  function Print() {
    let id;

    return function handleonChange(e) {
      clearTimeout(id);
      id = setTimeout(() => {
        let input = e.target.value;

        console.log(input);
      }, 1000);
    };
  }

  let handle = Print();

  return (
    <div>
      <input type="text" onChange={handle} />
    </div>
  );
}

export default Debounce;
