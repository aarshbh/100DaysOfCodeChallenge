import { useState } from "react";
import Profile from "./Components/Profile";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Prop-types</h1>
      <Profile
        name="Aarsh"
        email="aarsh@gmail.com"
        age={21}
        isMarried={false}
        friend={["jessica", "jake", "jerry", "jasmine"]}
      />
    </div>
  );
}

export default App;
