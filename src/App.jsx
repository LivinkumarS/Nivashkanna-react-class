import React from "react";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      {number % 2 != 0 ? <h1>ODD Number</h1> : <h1>Even Number</h1>}
      <h1 className={`${number % 2 != 0 ? "even" : "odd"}`}>{number}</h1>
      <button
        onClick={() => {
          setNumber((prev) => {
            return ++prev;
          });
        }}
      >
        +
      </button>
    </div>
  );
}
