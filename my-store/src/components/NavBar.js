import React from 'react'
import { NavLink } from 'react-router-dom'
import close_btn from '../assets/icons/close_icon.png'



function NavBar(props) {
    const { closeBtn } = props;
    return (
        <>

            <nav className='nav-container isOpen' onClick={() => closeBtn()}>
                <img src={close_btn} alt='' onClick={() => closeBtn()} className='close-btn' />
                <ul className='nav-inner'>
                    <NavLink className='nav-link'>Home</NavLink>
                    <NavLink className='nav-link'>Products</NavLink>
                    <NavLink className='nav-link'>About</NavLink>
                    <NavLink className='nav-link'>Contact</NavLink>
                    {/* <NavLink className='nav-link'>Cart</NavLink> */}
                    <NavLink className='nav-link'>Login</NavLink>
                </ul>
            </nav>
        </>
    )
}

export default NavBar
