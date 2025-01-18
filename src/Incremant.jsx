import React, { useState } from "react";

export default function Incremant() {
  const [number, setNumer] = useState(0);

  return (
    <div>
      <h1>{number}</h1>

      <button
        onClick={() => {
          setNumer((prev) => {
            return ++prev;
          });
        }}
      >
        Increment
      </button>
    </div>
  );
}
