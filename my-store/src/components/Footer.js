import React from 'react'
import './footer.scss'
import Logo from '../assets/icons/logo.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer-wrapper'>

      <div className='footer-container'>
        <div className='footer-logo-container'>
          <img src={Logo} alt='footer logo' />
        </div>

        <div className='footer-menu-container'>
          <h4>MENU</h4>
          <Link to='/' className='footer-link'>Home</Link>
          <Link to='/products' className='footer-link'>Products</Link>
          <Link to='/about-us' className='footer-link'>About</Link>
          <Link to='/contact-us' className='footer-link'>Contact</Link>
          <Link to='/login-signup' className='footer-link'>Login</Link>
        </div>

        <div className='footer-contact-container'>
          <h4>GET IN TOUCH</h4>
          <p>+234 708 549 5430</p>
          <p>hello@dimgbaeme.com.ng</p>
        </div>
      </div>

      <p style={{ textAlign: "center", color: "#fff", marginTop: "20px", fontSize: "12px" }}>All rights reserved by Dimmy's store, 2025</p>
    </footer>
  )
}

export default Footer
