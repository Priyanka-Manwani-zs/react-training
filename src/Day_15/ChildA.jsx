import React, { useContext, useEffect, useRef } from "react";
import "./style.css";
import Context from "../context/ThemeContext";

function ChildA() {
  const { bg, changebg } = useContext(Context);
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
