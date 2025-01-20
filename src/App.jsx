import React, { useState, createContext } from "react";
import "./App.css";
import Container1 from "./Container1";

export const userContext = createContext();

export default function App() {
  const [userName, setUserName] = useState("Nivaskanna");

  return (
    <div className="box">
      App
      <p>hello from {userName}</p>
      <userContext.Provider value={userName}>
        <Container1 userName={userName} />
      </userContext.Provider>
    </div>
  );
}
