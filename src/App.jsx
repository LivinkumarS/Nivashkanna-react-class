import React from "react";
import { useRef } from "react";

export default function App() {
  const inputRef = useRef();

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Click me
      </button>
    </div>
  );
}
