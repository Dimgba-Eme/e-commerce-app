import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navBar.scss'
import cart_icon from '../assets/icons/cart_icon.png'
import menu_btn from '../assets/icons/hamburger_menu.svg'
import close_btn from '../assets/icons/close_icon.png'



function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <img src={menu_btn} alt='hamburger menu' className='menu-btn' onClick={() => {setIsOpen(!isOpen) }} />


            <nav className={isOpen ? 'isOpen' : ''} onClick={() => {setIsOpen(!isOpen) }}>
                <ul className='nav-inner'>
                <img src={close_btn} alt='' onClick={() => { setIsOpen(!isOpen)}} className='close-btn' />
                    <NavLink className='nav-link'>Home</NavLink>
                    <NavLink className='nav-link'>Products</NavLink>
                    <NavLink className='nav-link'>About</NavLink>
                    <NavLink className='nav-link'>Contact</NavLink>
                    <NavLink className='nav-link'>Login</NavLink>

                </ul>
            </nav>
            <img src={cart_icon} alt='cart icon' className='cart-icon' />
        </>
    )
}

export default NavBar
