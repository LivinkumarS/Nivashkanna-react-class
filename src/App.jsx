import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [inpValue, setInputValue] = useState("");

  const [tasks, setTasks] = useState([]);

  function addTask() {
    setTasks((prev) => {
      return [...prev, inpValue];
    });

    setInputValue("");
  }

  function clearTask(index) {
    const updatedTask = tasks.filter((element, ind) => {
      return ind !== index;
    });
    setTasks(updatedTask);
  }

  return (
    <div className="box">
      <h1 className="title">ToDo List</h1>
      <input
        type="text"
        value={inpValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={addTask}>Submit</button>

      <div className="tasks">
        {tasks.map((element, index) => {
          return (
            <div className="task" key={index}>
              <h4>
                {index + 1}
                {") "}
                {element}
              </h4>{" "}
              <button
                onClick={() => {
                  clearTask(index);
                }}
              >
                clear
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
