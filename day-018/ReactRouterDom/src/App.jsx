import { useState } from 'react'
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import './App.css'
import { BrowserRouter as Router , Routes , Route ,Link } from 'react-router-dom';

function App() {

return(

<div className='App'>


<Router>
<nav>
  <ul>
    <li>
    <Link to="/Home">Home</Link>
    </li>
    <li>
    <Link to="/COntact">Contact</Link>
    </li>
  </ul>
</nav>
  <Routes>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Contact' element ={<Contact/>}/>
  </Routes>
</Router>

</div>

)

};


export default App
