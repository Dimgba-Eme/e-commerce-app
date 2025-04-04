import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navBar.scss'
import cart_icon from '../assets/icons/cart_icon.png'
import menu_btn from '../assets/icons/hamburger_menu.svg'
import close_btn from '../assets/icons/close_icon.png'

import { useProducts } from '../contexts/ContextProvider'

const {getTotalCartItem} = useProducts();

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <img src={menu_btn} alt='hamburger menu' className='menu-btn' onClick={() => { setIsOpen(!isOpen) }} />


            <div className='nav-container'>
                <nav className={isOpen ? 'isOpen' : ''} onClick={() => { setIsOpen(!isOpen) }}>
                    <ul className='nav-inner'>
                        <img src={close_btn} alt='' onClick={() => { setIsOpen(!isOpen) }} className='close-btn' />
                        <NavLink to='/' className='nav-link'>Home</NavLink>
                        <NavLink to='/products' className='nav-link'>Products</NavLink>
                        <NavLink to='/about-us' className='nav-link'>About</NavLink>
                        <NavLink to='/contact-us' className='nav-link'>Contact</NavLink>
                        <NavLink to='/login-signup' className='nav-link'>Login</NavLink>

                    </ul>
                </nav>
            </div>
            <NavLink to='/cart'><img src={cart_icon} alt='cart icon' className='cart-icon' /></NavLink>
            <span className='cart-item-count-container'><p className='cart-item-count'>0</p></span>
            
        </>
    )
}

export default NavBar
