import './App.css';
import { useState } from 'react';




function App() {
  
const [todoList , setTodoList] = useState([]);
const [newTask , setNewTask] = useState("");

const handleChange = (events) => {
setNewTask(events.target.value);
}

const addTask = () => {
  setTodoList([...todoList , newTask]);
}


  
  return (
    <div className="App">

      <div className='addTask'> 
      <input onChange={handleChange} />
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
