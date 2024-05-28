import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";
import Createpost from "./Pages/create-post/Createpost";
function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/createpost" element={<Createpost/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
