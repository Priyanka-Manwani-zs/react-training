import React, { useContext, useEffect, useRef } from "react";
import "./ParentStyle.css";
import ChildA from "./ChildA";
import ChildB from "./ChildB.JSX";
import ChildC from "./ChildC";
import ChildD from "./ChildD";
import Context2 from "../context2/ThemeContext2";

function Parent() {
  const { bg, changebg } = useContext(Context2);
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
      <div className="Parentmaincontainer" ref={rootRef}>
        <button onClick={handleChange}>swtich</button>
        <div className="newcontainer" ref={parentRef}>
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
