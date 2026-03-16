 import {user, skills} from "./data";

function App() {
  const title =  "JSX with Curly Braces Demo";

  const greet = (name) => {
    return `Hello, ${name}`; 
  };

  const a = 10;
  const b = 20;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      <h1>{title}</h1>
      <h2>{greet(user.name)}</h2>

      <p>Status: {user.isStudent ? "Student" : "Not a student"}</p>

      <p>Sum of {a} and {b} is <strong>{a+b}</strong></p>

      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>

      <h3>Skills:</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <img src="https://reactjs.org/logo-og.png" alt="React Logo" width={200} />

      <p>{/* 
           Q: Why curly braces are used in JSX?
           A: To embbed JavaScript expressions inside JSX.
          */}
          interview Tip: JSX uses <strong>{"{}"}</strong> to execute JavaScript.
          
          </p>
    </div>
  )
}

export default App;