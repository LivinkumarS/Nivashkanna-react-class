import React, { useContext } from "react";
import Container4 from "./Container4";
import { userContext } from "./App";

export default function Container3() {
  const userName = useContext(userContext);

  return (
    <div className="box">
      Container3
      <p>again hi from {userName}</p>
      <Container4 />
    </div>
  );
}
