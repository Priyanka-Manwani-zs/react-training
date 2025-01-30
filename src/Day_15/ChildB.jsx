import React, { useContext, useEffect, useRef } from "react";
import "./ParentStyle.css";
import Context2 from "../context2/ThemeContext2";
function ChildB() {
  const { bg, changebg } = useContext(Context2);
  const ChildBRef = useRef();

  useEffect(() => {
    ChildBRef.current.style.backgroundColor = bg;
  }, [bg]);

  function handlechildB() {
    changebg();
  }
  return (
    <div className="box2" ref={ChildBRef}>
      <button onClick={handlechildB}>swtich</button>
    </div>
  );
}

export default ChildB;
