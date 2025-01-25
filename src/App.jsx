import React, { useEffect, useState } from "react";

export default function App() {
  const [allEmployees, setAllEmployees] = useState([]);
  const [employee, setEmployee] = useState(null);
  const [id, setId] = useState("");
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    position: "",
    department: "",
  });

  useEffect(() => {
    const fetchAllEmployees = async () => {
      try {
        const employeesList = await fetch("http://localhost:3000/employees", {
          method: "GET",
        });

        if (employeesList.ok) {
          const data = await employeesList.json();
          setAllEmployees(data);
        }
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchAllEmployees();
  }, []);

  async function onIdSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/employees/${id}`, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setEmployee(data);
      }

      setId("")

    } catch (err) {
      console.log(err.message);
    }
  }

  async function onDataSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/employees/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEmployee),
      });

      if (response.ok) {
        setAllEmployees((prev) => {
          return [...prev, newEmployee];
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div>
      <h1>Adding Employee</h1>

      <form onSubmit={onDataSubmit}>
        <span>Name: </span>{" "}
        <input
          type="text"
          value={newEmployee.name}
          onChange={(e) => {
            setNewEmployee((prev) => {
              return { ...prev, name: e.target.value };
            });
          }}
        />
        <span>Position: </span>{" "}
        <input
          type="text"
          value={newEmployee.position}
          onChange={(e) => {
            setNewEmployee((prev) => {
              return { ...prev, position: e.target.value };
            });
          }}
        />
        <span>Department: </span>{" "}
        <input
          type="text"
          value={newEmployee.department}
          onChange={(e) => {
            setNewEmployee((prev) => {
              return { ...prev, department: e.target.value };
            });
          }}
        />
        <input type="submit" />
      </form>

      <h1>All Employees</h1>

      {allEmployees.length !== 0 ? (
        allEmployees.map((employee, index) => (
          <div className="employee" key={index}>
            <h3>Name: {employee.name}</h3>
            <h3>Position: {employee.position}</h3>
            <h3>Department: {employee.department}</h3>
          </div>
        ))
      ) : (
        <p>No Employee</p>
      )}

      <h1>Particular Employee</h1>

      <form onSubmit={onIdSubmit}>
        <input type="text" onChange={(e) => setId(e.target.value)} value={id} />
        <input type="submit" />
      </form>

      {employee ? (
        <div className="employee">
          <h3>Name: {employee.name}</h3>
          <h3>Position: {employee.position}</h3>
          <h3>Department: {employee.department}</h3>
        </div>
      ) : (
        <p>no employee detail</p>
      )}
    </div>
  );
}
