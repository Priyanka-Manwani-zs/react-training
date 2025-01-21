import { useEffect, useState } from "react";

const useWindow = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidthh] = useState(window.innerWidth);

  useEffect(() => {
    function calDimen() {
      setHeight(window.innerHeight);
      setWidthh(window.innerWidth);
    }

    window.addEventListener("resize", calDimen);

    return () => {
      window.removeEventListener("resize", calDimen);
    };
  }, []);

  return { height, width };
};

export default useWindow;
