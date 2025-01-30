import React, { useContext, useEffect, useRef } from "react";
import "./style.css";
import ChildA from "./ChildA";
import ChildB from "./ChildB.JSX";
import ChildC from "./ChildC";
import ChildD from "./ChildD";
import Context from "../context/ThemeContext";

function Parent() {
  const { bg, changebg } = useContext(Context);
  const parentRef = useRef();
  const rootRef = useRef();

  useEffect(() => {
    parentRef.current.style.backgroundColor = bg;
  }, [bg]);
  useEffect(() => {
    rootRef.current.style.backgroundColor = bg;
  }, [bg]);

  function handleChange() {
    changebg();
  }

  return (
    <>
      <div className="maincontainer" ref={rootRef}>
        <button onClick={handleChange}>swtich</button>
        <div className="main" ref={parentRef}>
          <ChildA />
          <ChildB />
          <ChildC />
          <ChildD />
        </div>
      </div>
    </>
  );
}

export default Parent;
