 import React, { useRef } from "react";

function App() {
  const inputRef = useRef();

  const hideInput = () => {
    inputRef.current.style.display = "none";
  };

  const showInput = () => {
    inputRef.current.style.display = "block";
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Hello" />
      <br /><br />
      <button onClick={hideInput}>Hide</button>
      <button onClick={showInput}>Show</button>
    </div>
  );
}

export default App;