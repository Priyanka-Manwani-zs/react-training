import React, { useState, useRef, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = count;
  }, [count]);
  let foc = useRef();

  useEffect(() => {
    if (count == 3) {
      foc.current.focus();
    }
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <input value={renderCount.current} ref={foc} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
