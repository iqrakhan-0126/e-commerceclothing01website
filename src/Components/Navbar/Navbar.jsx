import React from 'react'
import './Navbar.css '

import logo from '../A ssets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p> SHOPSIFY</p>
      </div>
      
    </div>
  )
}

export default Navbar
