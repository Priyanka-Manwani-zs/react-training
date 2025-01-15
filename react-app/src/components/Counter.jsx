import React, { useContext, useEffect, useReducer, useRef } from "react";
import style from "./counter.module.css";
import Context from "../context/ThemeContext";

function Counter() {
  const { bgcolor, changebg } = useContext(Context);
  let initialState = {
    count: 0,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
    }
  }

  let topref = useRef(null);

  useEffect(() => {
    console.log("current ref is :", topref.current);
    topref.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  function handleDoubleClick() {
    changebg();
  }

  function handleDoubleClickOnIncrerement(event) {
    event.stopPropagation();
  }
  function handleDoubleClickOnDecrement(event) {
    event.stopPropagation();
  }
  function handleDoubleClickOnReset(event) {
    event.stopPropagation();
  }

  useEffect(() => {
    if (topref.current) {
      topref.current.style.backgroundColor = bgcolor;
    }
  }, [bgcolor]);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      className={style.counter}
      ref={topref}
      onDoubleClick={handleDoubleClick}
    >
      {" "}
      <p>color:{bgcolor}</p>
      <p>{state.count}</p>
      <button
        onClick={() => dispatch({ type: "increment" })}
        onDoubleClick={handleDoubleClickOnIncrerement}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        onDoubleClick={handleDoubleClickOnDecrement}
      >
        decrement
      </button>
      <button
        onClick={() => dispatch({ type: "reset" })}
        onDoubleClick={handleDoubleClickOnReset}
      >
        reset
      </button>
    </div>
  );
}

export default Counter;
