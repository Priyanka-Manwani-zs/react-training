import React, { useContext, useEffect, useRef } from "react";
import "./ParentStyle.css";
import Context2 from "../context2/ThemeContext2";

function ChildA() {
  const { bg, changebg } = useContext(Context2);
  const ChildARef = useRef();

  useEffect(() => {
    ChildARef.current.style.backgroundColor = bg;
  }, [bg]);

  function handlechildA() {
    changebg();
  }
  return (
    <div className="box1" ref={ChildARef}>
      <button onClick={handlechildA}>swtich</button>
    </div>
  );
}

export default ChildA;
