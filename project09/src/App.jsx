import React, {useState} from "react";

function App() {
  const [status, setStatus] = useState(0);

  return (
    <div style = {{textAlign: "center", marginTop: "50px"}}>

      <h1>Multiple Conditional Rendering</h1>

      <button onClick={() => setStatus(1)}>Show Student </button>
      <button onClick={() => setStatus(2)}>Show Teacher</button>
      <button onClick={() => setStatus(3)}>Show Admin</button>

      <hr />

      {status === 1 ? (
        <div>welcome Student</div>

      ) : status === 2 ? (
        <div>welcome Teacher</div>
      ) : (
        <div>welcome Admin</div>
      )}

    
    
    </div>
  );
}

export default App;