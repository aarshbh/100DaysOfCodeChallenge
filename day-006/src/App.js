import './App.css';
import { useState } from 'react';




function App() {
  
 const [showText, setShowText] = useState(true);



  
  return (
    <div className="App">
      <button onClick={
        () => {setShowText(!showText);
      }}
      >
        SHOW/HIDE TEXT
      </button>
      {showText && <h1> Day 6 of #100DaysOfCodeChallenge. Practised on event listner properties in ReactJS </h1>}
    </div>
  );
}


export default App;
