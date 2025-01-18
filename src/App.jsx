import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber((prev) => {
            return ++prev;
          });
        }}
      >
        Increase Number
      </button>
    </div>
  );
}
