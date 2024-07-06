import React from 'react'

const navLinks = () => {
  return (
    <div>
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
    </div>
  )
}

export default navLinks
