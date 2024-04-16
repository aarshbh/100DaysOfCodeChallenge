import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router , Routes , Route } from "react-router-dom";
import {Home} from "./Pages/Home";
import {Menu} from "./Pages/Menu";
import {Contact} from "./Pages/Contact";

function App() {
  

  return (
    <div className='App'>
      <Router>
        <Routes>

          <Route path='/Home' element={<Home />} />
          <Route path='/Menu' element={<Menu/>} />
          <Route path='/Contact' element={<Contact />} />

        </Routes>
      </Router>
      <h2>Hello</h2>
    </div>
  );
};

export default App;
