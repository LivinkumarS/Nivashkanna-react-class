import React, { useContext } from "react";
import { userContext } from "./App";

export default function Container4() {
  const userName = useContext(userContext);

  return (
    <div className="box">
      Container4
      <p>again hi from {userName}</p>
    </div>
  );
}
