import { useState } from 'react'
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import './App.css'
import { BrowserRouter as Router , Routes , Route ,Link } from 'react-router-dom';
import books from "./Pages/books";
import newBooks from "./Pages/newBooks";
import bookList from './Pages/bookList';
import Book from "./Pages/Book";
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

<Route path='/Book'>
  <Route index element={<bookList/>}/>
  <Route path=':id' element={<Book/>}/>
  <Route path='new' element={<newBooks/>}/>
</Route>
  </Routes>
</Router>

</div>

)

};


export default App
