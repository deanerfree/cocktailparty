import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact className="logo">
        <div className="logo">Cocktails</div>
      </NavLink>

      <nav className="navbarList">
        <NavLink to="/" exact className="navbarItems">
          Home
        </NavLink>
        <NavLink to="/search" className="navbarItems">
          Search
        </NavLink>
        <NavLink to="/cocktails101" className="navbarItems">
          Search
        </NavLink>
      </nav>
    </div>
  )
}
export default Navbar
