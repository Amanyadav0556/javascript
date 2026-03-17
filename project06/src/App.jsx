 import react, { useState } from "react";

function App() {
  const [count, setcount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={() => setcount(count + 1)}>Increment</button>
      <button onClick={() => setcount(count - 1)}>Decrease</button>
    </div>
  );
}


export default App;