import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <>
      <nav>
        <ul>
            <NavLink>Home</NavLink>
            <NavLink>Products</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Contact</NavLink>
            <NavLink>Cart</NavLink>
            <NavLink>Login</NavLink>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
