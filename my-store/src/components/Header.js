import './header.scss'
import React, { useState } from 'react'
import Logo from '../assets/icons/logo.png'
import cart_icon from '../assets/icons/cart_icon.png'
import menu_btn from '../assets/icons/hamburger_menu.svg'
import NavBar from '../components/NavBar'



function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const closeBtn = () => {
        return (
            setIsOpen(!isOpen)
        )
    }
    return (
        <>

            <header className='header-wrapper'>
                <img src={menu_btn} alt='hamburger menu' className='menu-btn' onClick={() => setIsOpen(!isOpen)} />
                <div className='header-container'>
                    <img src={Logo} alt='Logo' className='logo' />
                    <h4>Dimmy's Store</h4>
                </div>
                {isOpen && (
                    <NavBar closeBtn={closeBtn} />
                )}


                <img src={cart_icon} alt='cart icon' className='cart-icon' />
            </header>

        </>
    )
}

export default Header
