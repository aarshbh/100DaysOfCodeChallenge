import { useState } from 'react'
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import Navbar from "./Pages/Navbar";

import './App.css'
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom';

function App() {

return(

<div className='App'>

<Router>
<Navbar />
<Routes>

<Route path="/" element={<Home />} />
<Route path="/Contact" element={<Contact />} />
<Route path="/Profile" element={<Profile />} />
<Route path="/*" element={ <h1> Page Not Found </h1> } />

</Routes>

</Router>

</div>

)

};


export default App
