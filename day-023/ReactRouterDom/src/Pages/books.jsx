import React from 'react'
import { useSearchParams } from 'react-router-dom'
import {Link} from "react";
const books = () => {

  const [searchParams, setSearchParams ] = useSearchParams( { n : 3 } )
  console.log(searchParams)


  return (
    <div>
      <Link to = ".books/1"> Book 1 </Link>
      <br/>
      <Link to="/books/2"> Book 2 </Link>
      <br />
      <Link to="/books/new"> New Book </Link>
      <Outlet context =  { { hello: " World " } } />
      <input 
      type = "number" 
      />
    </div>
  )
}

export default books
