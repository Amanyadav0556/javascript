 import React, { useState } from "react";

function FormExample() {
  // State for input
  const [name, setName] = useState("");

  // State for dropdown
  const [city, setCity] = useState("Delhi"); // default selected

  // State for radio
  const [gender, setGender] = useState("");

  return (
    <div>
      <h2>Radio Button Example</h2>

      {/* Radio Buttons */}
      <input
        type="radio"
        name="gender"
        value="Male"
        checked={gender === "Male"}
        onChange={(e) => setGender(e.target.value)}
      /> Male

      <br />

      <input
        type="radio"
        name="gender"
        value="Female"
        checked={gender === "Female"}
        onChange={(e) => setGender(e.target.value)}
      /> Female

      <br /><br />

      {/* Input */}
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      {/* Dropdown */}
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Noida">Noida</option>
      </select>

      <h3>Output:</h3>
      <p>Name: {name}</p>
      <p>City: {city}</p>
      <p>Gender: {gender}</p>
    </div>
  );
}

export default FormExample;