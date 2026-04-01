 import React from "react";

function App() {
  const students = [
    { id: 1, name: "Rahul", age: 20 },
    { id: 2, name: "Amit", age: 22 },
    { id: 3, name: "Neha", age: 21 }
  ];

  return (
    <div>
      <h2>Student List</h2>

      <table border="18">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>

        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;