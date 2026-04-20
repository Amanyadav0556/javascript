 import React, { useRef, useState } from "react";

function App() {
  const countRef = useRef(0);
  const [stateCount, setStateCount] = useState(0);

  return (
    <div>
      <h3>Ref Count: {countRef.current}</h3>
      <h3>State Count: {stateCount}</h3>

      <button onClick={() => countRef.current++}>
        Increase Ref (No Re-render)
      </button>

      <button onClick={() => setStateCount(stateCount + 1)}>
        Increase State (Re-render)
      </button>
    </div>
  );
}

export default App;