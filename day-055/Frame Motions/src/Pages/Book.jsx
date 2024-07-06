import React from 'react'
import {Link , Outlet} from "react-router-dom";
const Book = () => {
  return (
    <div>
      <Link path="/Book1">Book1</Link>
      <br />
      <Link path="/Book2">Book2</Link>
      <br />
      <Link path="/Book/new">New Book</Link>
      <Outlet context={{ hello : "World"}} />
    </div>
  )
}

export default Book
