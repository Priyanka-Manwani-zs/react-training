import React, { useContext, useEffect, useRef } from "react";
import "./style.css";
import Context from "../context/ThemeContext";

function ChildD() {
  const { bg, changebg } = useContext(Context);
  const ChildDRef = useRef();

  useEffect(() => {
    ChildDRef.current.style.backgroundColor = bg;
  }, [bg]);

  function handlechildD() {
    changebg();
  }
  return (
    <div className="box4" ref={ChildDRef}>
      <button onClick={handlechildD}>swtich</button>
    </div>
  );
}

export default ChildD;
