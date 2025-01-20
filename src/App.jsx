import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [number, setNumber] = useState(0);

  const refNumber = useRef(0);


  useEffect(() => {
    console.log("Rendered");
  });

  return (
    <div>
      <button
        onClick={() => {
          setNumber((prev) => {
            return ++prev;
          });
        }}
      >
        useState inc
      </button>

      <button
        onClick={() => {
          refNumber.current++;
          console.log(refNumber.current);
        }}
      >
        useRef inc
      </button>
    </div>
  );
}
