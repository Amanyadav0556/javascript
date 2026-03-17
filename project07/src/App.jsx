  import {useState} from 'react'

function App() {
  const [name, setName] = useState("Rahul");
  const [age, setAge] = useState(20);

  return(
    <div>
      <h2>name: {name}</h2>
      <p>Age: {age}</p>

      <button onClick={() => setName("Amit")}>Change Name</button>
      <button onClick={() => setAge(age + 1)}>Change Age</button>
    </div>
  );
}

export default App;