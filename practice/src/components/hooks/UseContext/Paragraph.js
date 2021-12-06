import React, { useContext } from "react";
import { ThemeContext } from "./App";

function Paragraph() {
  // bên file App ThemeContext.Provider được truyền vào value là gì thì ở đây nhận lại cái đó
  const theme = useContext(ThemeContext);

  return (
    <div>
      <p className={theme}>Test</p>
    </div>
  );
}

export default Paragraph;
