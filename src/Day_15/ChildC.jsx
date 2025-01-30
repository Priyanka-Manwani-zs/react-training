import React, { useContext, useEffect, useRef } from "react";
import "./ParentStyle.css";
import Context2 from "../context2/ThemeContext2";

function ChildC() {
  const { bg, changebg } = useContext(Context2);
  const ChildCRef = useRef();

  useEffect(() => {
    ChildCRef.current.style.backgroundColor = bg;
  }, [bg]);

  function handlechildC() {
    changebg();
  }
  return (
    <div className="box3" ref={ChildCRef}>
      <button onClick={handlechildC}>swtich</button>
    </div>
  );
}

export default ChildC;
