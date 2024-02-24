import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [hex, setHex] = useState("");
  const randomNum = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777721).toString(16);
    setHex(randomColor);
  };

  return (
    <div className="App" style={{ backgroundColor: hex }}>
      <h1> {hex} </h1>
      <button onClick={() => randomNum()}>Click Me</button>
      <button onClick={() => navigator.clipboard.writeText(hex)}>
        Copy text
      </button>
    </div>
  );
};

export default App;
