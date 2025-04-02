import React from 'react'
import './categories.scss'

import image4 from '../assets/images/image4.jpeg'
import image38 from '../assets/images/image38.jpeg'
import image59 from '../assets/images/image59.jpeg'
import image82 from '../assets/images/image82.jpeg'
import image97 from '../assets/images/image97.jpeg'
import { Link } from 'react-router-dom'


const Categories = () => {
    return (
        <>
            <section className='categories-wrapper'>
                <div className='categories-title'>
                    <h1>Categories</h1>
                    <hr />
                </div>

                <div className='categories-inner'>
                    <div className='categories'>
                        <h1>Hoodies</h1>
                        <Link to={'/products/hoodies'}><img src={image4} alt='Hoodies image' onClick={() => window.scrollTo(0, 0)} /></Link>
                    </div>

                    <div className='categories'>
                        <h1>T-shirt</h1>
                        <Link to={'/products/t-shirt'}> <img src={image38} alt='T-shirt image' onClick={() => window.scrollTo(0, 0)} /></Link>
                    </div>

                    <div className='categories'>
                        <h1>Headwear</h1>
                        <Link to={'/products/headwear'}> <img src={image59} alt='Headwear image' onClick={() => window.scrollTo(0, 0)} /></Link>
                    </div>

                    <div className='categories'>
                        <h1>Footwear</h1>
                        <Link to={'/products/footwear'}> <img src={image82} alt='Footwear image' onClick={() => window.scrollTo(0, 0)} /></Link>
                    </div>

                    <div className='categories'>
                        <h1>Accessories</h1>
                        <Link to={'/products/accessories'}> <img src={image97} alt='Accessories image' onClick={() => window.scrollTo(0, 0)} /></Link>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Categories
