import React, { useState, createContext } from "react";
import "./style.css";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  /*
    ThemeContext.Provider: có 1 props là value 
      khi nhận vào value thì toàn bộ children của ThemeContext.Provider đều sẽ nhận đc dữ liệu từ value
  */

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <button onClick={toggleTheme}>Toggle theme</button>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
