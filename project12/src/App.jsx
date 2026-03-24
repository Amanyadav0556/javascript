 import React, { useState } from "react";

function App() {
  // Step 2: Define state
  const [inputValue, setInputValue] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setInputValue(e.target.value); // Step 3
  };

  // Clear input
  const clearInput = () => {
    setInputValue(""); // Step 5
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Get Input Field Value</h2>

      <input
        type="text"
        placeholder="Enter something"
        value={inputValue}
        onChange={handleChange}
      />

      <p>Entered Value: {inputValue}</p>

      <button onClick={clearInput}>Clear</button>
    </div>
  );
}

export default App;