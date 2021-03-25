import React from 'react'

const Navbar = () => {
  const navbarItems = ['Cocktails 101', 'Tools']
  return (
    <div className="navbar">
      <div className="logo">Cocktail Party</div>
      <div className="navbarList">
        {navbarItems.map((navbarItem, index) => {
          return (
            <div className="navbarItems" key={index}>
              {navbarItem}
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Navbar
