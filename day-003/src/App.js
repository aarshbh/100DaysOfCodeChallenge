
import './App.css';

function App() {
  const age = 17;
  const isGreen = false;
  return (
    <div className="App">
      {age >= 18 ? <h1> Over Age </h1> : <h1> Under Age </h1>}
      <h1 style={{color: "red"}}> This has Color </h1>
    </div>
  );
}


export default App;
