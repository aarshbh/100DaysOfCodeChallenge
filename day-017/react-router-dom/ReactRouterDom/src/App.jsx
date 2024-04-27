import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Menu from "./Pages/Menu";


function App() {
  

  return (
    <div className='App'>
      <Router>
        <Routes>

          <Route path="/Home" element={<Home/>}/>
          <Route path="/Menu" element={<Menu/>}/>
          <Route path="/Contact" element={<Contact/>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App
