import React, { createContext, useContext, useState } from "react";
const Context = createContext();
function ThemeContext({ children }) {
  const [bg, setBg] = useState("beige");

  function changebg() {
    setBg((prev) => (prev == "beige" ? "yellow " : "beige"));
  }

  return (
    <Context.Provider value={{ bg, changebg }}>{children}</Context.Provider>
  );
}
export { ThemeContext };
export default Context;
