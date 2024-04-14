import {useState,useEffect} from 'react'
import './App.css'
import  Test  from "./Test";


function App() {
  const [showText , setShowText] = useState(false);

useEffect ( () => {
  console.log("Component Mounted");
  return () => {
    console.log("Component Unmounted");
  }
  []
});

  return (
   <div className='App'>
    <button
    onClick={()=> {
      setShowText(!showText);
    }}
    > Show Text </button>

{showText && <Test />}

   </div>
   
  );
}

export default App
