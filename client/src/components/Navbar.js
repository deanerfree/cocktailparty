import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact className="logo">
        <div className="logo">Some Garage Bar</div>
      </NavLink>

      <nav className="navbarList">
        <NavLink to="/" exact className="navbarItems">
          Home
        </NavLink>
        <NavLink to="/search" className="navbarItems">
          Search
        </NavLink>
        <NavLink to="/cocktails101" className="navbarItems">
          Cocktails101
        </NavLink>
      </nav>
    </div>
  )
}
export default Navbar
