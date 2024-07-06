import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import './App.css';
import bookList from './Pages/bookList';
import newBooks from './Pages/newBooks';
import Book from "./Pages/Book";



import {AnimatePresence} from 'frame-motion/dist/framer-motion';

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <div className='App'>


      <Router>

      <nav>
          <ul>
            <li>
              <NavLink
                className="navLink"
                style={({ isActive }) => {
                  return isActive ? { color: "red" } : {};
                }}
                to="/" state={{ message: "hii" }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
<AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/Home' element={<Home />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Book'>
            <Route index element={<bookList />} />
            <Route path=':id' element={<Book />} />
            <Route path='new' element={<newBooks />} />
          </Route>
        </Routes>
</AnimatePresence>

      </Router>


    </div>
  );
}

export default App;
