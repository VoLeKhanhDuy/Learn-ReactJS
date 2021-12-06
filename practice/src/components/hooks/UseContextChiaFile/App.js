import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function App() {
  const context = useContext(ThemeContext);
  return (
    <div>
      {/* <ThemeProvider> BÌNH THƯỜNG THÌ BỌC CÁI THẰNG NÀY TẠI index.js */}
      <div>
        <button onClick={context.toggleTheme}>Toggle theme</button>
      </div>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
