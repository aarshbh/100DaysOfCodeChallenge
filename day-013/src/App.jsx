import './App.css';
import { useState } from 'react';
import {} from "./Task1";


function App() {
  
const [todoList , setTodoList] = useState([]);
const [newTask , setNewTask] = useState("");

const handleChange = (events) => {
setNewTask(events.target.value);
}

const addTask = () => {
  const task = {
    id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
    taskName: newTask,

  };
  setTodoList([...todoList , task]);
};




const deleteTask = (id) => {

setTodoList(todoList.filter((task) => task.id !== id));
}


  
  return (
    <div className="App">

      <div className='addTask '> 
      <input onChange={handleChange}/>
      <button onClick={addTask}> Add task </button>
      </div>
 
      <div className='list'>
      {todoList.map((task) => {
        return (
          <div className="Task">
          <h1> {task.taskName} </h1>
          <button onClick={()=> deleteTask(task.id)}> X </button>
          </div>
      );
      })}
      </div>

    </div>
  );
}


export default App;
