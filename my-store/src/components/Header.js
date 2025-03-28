import './header.scss'
import Logo from '../assets/icons/logo.png'
import NavBar from '../components/NavBar'



function Header() {
    return (
        <>

            <header className='header-wrapper'>
                <div className='header-container'>
                    <img src={Logo} alt='Logo' className='logo' />
                    <h4>Dimmy's Store</h4>
                </div>
        
                    <NavBar />
            </header>

        </>
    )
}

export default Header
