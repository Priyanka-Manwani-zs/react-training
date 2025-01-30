import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeContext } from "./context/ThemeContext.jsx";
import { ThemeContext2 } from "./context2/ThemeContext2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContext>
      <ThemeContext2>
        <App />
      </ThemeContext2>
    </ThemeContext>
  </StrictMode>
);
