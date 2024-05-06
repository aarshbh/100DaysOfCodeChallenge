import { useState, createContext } from "react";
import React from "react";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import Navbar from "./Pages/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const AppContext = createContext();

const App = () => {
  const [username, setUsername] = useState("Aarsh Bharti");

  return (
    <div className="App">
      <br />

      <p className="hello">hello.</p>

      <AppContext.Provider value={ { username , setUsername } }>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/Home"> Home </Link>
              </li>

              <li>
                <Link to="/Contact"> Contact </Link>
              </li>

              <li>
                <Link to="/Profile"> Profile </Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/Home" element={<Home  />} />
            <Route path="/Contact" element={<Contact />} />
            <Route
              path="/Profile"
              element={
                <Profile  />
              }
            />
            <Route path="/*" element={<h1> Error 420 </h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
};

export default App;
