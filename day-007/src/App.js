import './App.css';
import { useState } from 'react';




function App() {
  
const [todoList , setTodoList] = useState([]);
const [newTask , setNewTask] = useState("");

const handleChanges = (events) => {
setNewTask(events.taget.value);
}

  
  return (
    <div className="App">

      <div className='addTask'> 
      <input></input>
      <button> Add task </button>
      </div>
 
 

    </div>
  );
}


export default App;
