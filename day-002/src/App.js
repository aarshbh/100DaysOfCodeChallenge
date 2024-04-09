
import './App.css';

function App() {
  return (
    <div className="App">
      <Job salery={10000} position={"Senior SDE"} company="Amazon"/>
      <Job salery={50000} position={"Head SDE"} company="Google"/>
      <Job salery={45000} position={"Junior SDE"} company="Netflix"/>
      

    </div>
  );
}

const Job = (props) => {
  return (
    <div>
    <h1> {props.salery} </h1>
    <h1> {props.position} </h1>
    <h1> {props.company} </h1>
    </div>
  );
};

export default App;
