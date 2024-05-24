import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
import Home from "./Home";
import "./App.css";
import Login from "./Login";
import Contact from "./Contact";
import { Provider } from "react-redux";
import Store from "./Store";
function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Router>
 
        <Link to="/" > Home </Link>
        <Link to="/Contact" > Contact </Link>
        <Link to="/Login" > Login </Link>


          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
