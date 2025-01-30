import React from "react";

function Debouncing() {
  function handlechange() {
    let id;

    function innerfn(event) {
      clearTimeout(id);

      id = setTimeout(() => {
        console.log(event.target.value);
      }, 1000);
    }

    return innerfn;
  }
  const handle = handlechange();
  return (
    <div>
      <input type="text" onChange={handlechange} />
    </div>
  );
}

export default Debouncing;
