import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Paragraph() {
  const context = useContext(ThemeContext);

  return (
    <div>
      <p className={context.theme}>Test</p>
    </div>
  );
}

export default Paragraph;
