import React, { useContext, useEffect, useRef } from "react";
import "./ParentStyle.css";
import Context2 from "../context2/ThemeContext2";

function ChildD() {
  const { bg, changebg } = useContext(Context2);
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
