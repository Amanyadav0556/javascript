 import React from "react";
import User from "./User";

function App() {
  const user = {
    name: "Rahul",
    city: "Delhi"
  }

  const skills = ["React", "Node", "Java"];

  return(
    <div>
      <User data={user} skills={skills} />
    </div>
  )
}

export default App;