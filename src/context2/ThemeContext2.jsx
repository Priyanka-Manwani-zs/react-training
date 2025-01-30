import React, { createContext, useContext, useState } from "react";
const Context2 = createContext();
function ThemeContext2({ children }) {
  const [bg, setBg] = useState("beige");

  function changebg() {
    setBg((prev) => (prev == "beige" ? "yellow " : "beige"));
  }

  return (
    <Context2.Provider value={{ bg, changebg }}>{children}</Context2.Provider>
  );
}
export { ThemeContext2 };
export default Context2;
