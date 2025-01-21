import { useEffect, useState } from "react";

function UseComponentSize(ref) {
  console.log(ref);

  const [Compheight, setCompHeight] = useState(window.innerHeight);
  const [Compwidth, setCompWidthh] = useState(window.innerWidth);

  useEffect(() => {
    setCompHeight(ref.current.offsetHeight);
    setCompWidthh(ref.current.offsetWidth);
  }, []);
  console.log("comp height inside hook", Compheight);
  console.log("comp width inside hook", Compwidth);
  return { Compheight, Compwidth };
}

export default UseComponentSize;
