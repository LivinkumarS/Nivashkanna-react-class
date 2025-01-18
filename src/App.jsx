import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const nameList = ["Ajith", "Vijay", "Surya", "Vikram", "Dhanush"];

  const [number, setNumber] = useState(0);


  useEffect(() => {
    console.log("Changed Name");
  }, [number]);

  return (
    <div>
      <h1>{nameList[number]}</h1>
      <button
        onClick={() => {
          setNumber((prev) => {
            if (prev == 4) {
              return 0;
            }
            return ++prev;
          });
        }}
      >
        Increase Number
      </button>
    </div>
  );
}
