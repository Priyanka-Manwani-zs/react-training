import React, { createContext, useContext, useState } from "react";
const Context = createContext();
function ThemeContext({ children }) {
  const colors = ["#ff5733", "#ecff33", "#104d42"];

  const [bgcolor, setBgcolor] = useState(colors[0]);

  function changebg() {
    setBgcolor(
      (prevBgColor) => colors[(colors.indexOf(prevBgColor) + 1) % colors.length]
    );
  }

  return (
    <Context.Provider value={{ bgcolor, changebg }}>
      {children}
    </Context.Provider>
  );
}
export { ThemeContext };
export default Context;
