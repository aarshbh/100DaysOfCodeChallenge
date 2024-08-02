import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
function App() {
  const [Jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="App">
      <h1>Full-Stack Development</h1>
      <p>JOKES: {Jokes.length}</p>

      {Jokes.map((Jokes, length) => {
        <div key={Jokes.id}>
          <h3>{Joke.title}</h3>
          <p>{joke.content}</p>
        </div>;
      })}
    </div>
  );
}

export default App;
