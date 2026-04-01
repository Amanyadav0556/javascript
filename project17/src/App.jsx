 import React from "react";
import Clock from "./Clock";

function App() {
  return (
    <div style = {{ textAlign: "center" }}>
      <h1>React Clock Using Props</h1>

      <Clock color="blue" />
      <Clock color="green" />
      <Clock color="red" />
    </div>
  )
}

export default App;