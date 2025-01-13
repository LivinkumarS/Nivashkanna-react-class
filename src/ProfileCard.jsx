import React from "react";

export default function ProfileCard({ Name, Age, Role }) {
  return (
    <div className="box">
      <h1>Name:{Name}</h1>
      <h1>Age:{Age}</h1>
      <h1>Role:{Role}</h1>
    </div>
  );
}
