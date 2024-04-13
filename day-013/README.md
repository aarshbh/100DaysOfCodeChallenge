1. Parenthesis functions are not allowed in react as an inline command as
   in line  <button onClick={ deleteTask(task)> X </button>
   ,So we need to add a function to pass the parenthesis like this:
    <button onClick={()=> deleteTask(task)}> X </button>

2. Filter Function for deletion:     