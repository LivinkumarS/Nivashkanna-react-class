import React from "react";
import "./App.css";

export default function App() {
  const output = [
    {
      title: "Fav Foods",
      elements: ["Biriyani", "Meals", "Dosa", "Idly", "Uthappam"],
    },
    {
      title: "Fav Snacks",
      elements: ["Laddu", "Mixture", "Biscuits", "Halwa"],
    },
    {
      title: "Fav Movies",
      elements: ["Thuppakki", "96", "Alai Payuthey", "GOAT"],
    },
  ];

  return (
    <div className="box">
      {output.map((section, index) => {
        return (
          <div key={index}>
            <h1>{section.title}</h1>
            {section.elements.map((element, index) => (
              <p className="element" key={index}>
                {element}
              </p>
            ))}
          </div>
        );
      })}
    </div>
  );
}
