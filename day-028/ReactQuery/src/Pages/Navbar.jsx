import React from 'react'
import {BrowserRouter as Router , Routes , Route , Link} from "react-router-dom";
const Navbar = () => {
  return (
    <div>
       
        <nav>
  <ul>
    <li>
      <Link to="/Home">Home</Link>
    </li>

    <li>
      <Link to="/Contact">Contact</Link>
    </li>

    <li>
      <Link to="/Profile">Profile</Link>
    </li>
  </ul>
</nav>


    </div>
  )
}

export default Navbar
