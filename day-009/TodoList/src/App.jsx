import './App.css';
import { useState } from 'react';




function App() {
  
const [todoList , setTodoList] = useState([]);
const [newTask , setNewTask] = useState("");

const handleChanges = (events) => {
setNewTask(events.taget.value);
}

const addTask = () => {
  const newTodoList = [...todoList , newTask];
  setTodoList(newTodoList);
}


  
  return (
    <div className="App">

      <div className='addTask'> 
      <input></input>
      <button onClick={addTask}> Add task </button>
      </div>
 
      <div className='list'>
      {todoList.map((task) => {
        return <h1> {task} </h1>
      })}
      </div>

    </div>
  );
}


export default App;
