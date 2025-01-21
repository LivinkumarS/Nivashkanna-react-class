import React from "react";
import { useReducer } from "react";
import { useState } from "react";

function reducerFn(state, action) {
  if (action == "increment") {
    return { key: state.key + 1 };
  } else if (action === "decrement") {
    return { key: state.key - 1 };
  } else {
    return { key: state.key * 2 };
  }
}

export default function App() {
  // const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(reducerFn, { key: 0 });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        inc
      </button>
      <h1>{count.key}</h1>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        dec
      </button>
      <button
        onClick={() => {
          dispatch("double");
        }}
      >
        double
      </button>
    </div>
  );
}
