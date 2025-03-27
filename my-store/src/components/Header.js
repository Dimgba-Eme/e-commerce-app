import './header.scss'
import React from 'react'
import Logo from '../assets/icons/logo.png'
import cart_icon from '../assets/icons/cart_icon.png'
import menu_btn from '../assets/icons/hamburger_menu.svg'


function Header() {
    return (
        <>

            <header className='header-wrapper'>
                <img src={menu_btn} alt='hamburger menu' />
                <div className='header-container'>
                    <img src={Logo} alt='Logo' className='logo' />
                    <h4>Dimmy's Store</h4>
                </div>
                <img src={cart_icon} alt='cart icon' className='cart-icon' />
            </header>

        </>
    )
}

export default Header
