import React, { useState } from "react";

export default function App() {
  const [inpValue, setInpValue] = useState("");

  return (
    <div>
      <input type="text" value={inpValue} onChange={(e)=>{setInpValue(e.target.value)}}/>
      <button onClick={()=>{setInpValue("")}}>clear</button>
      <h1>{inpValue}</h1>
    </div>
  );
}
