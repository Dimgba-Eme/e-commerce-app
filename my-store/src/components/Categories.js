import React from 'react'
import './categories.scss'

import image4 from '../assets/images/image4.jpeg'
import image38 from '../assets/images/image38.jpeg'
import image59 from '../assets/images/image59.jpeg'
import image82 from '../assets/images/image82.jpeg'
import image97 from '../assets/images/image97.jpeg'


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
                        <img src={image4} alt='Hoodies image' />
                    </div>

                    <div className='categories'>
                        <h1>T-shirt</h1>
                        <img src={image38} alt='T-shirt image' />
                    </div>

                    <div className='categories'>
                        <h1>Headwear</h1>
                        <img src={image59} alt='Headwear image' />
                    </div>

                    <div className='categories'>
                        <h1>Footwear</h1>
                        <img src={image82} alt='Footwear image' />
                    </div>

                    <div className='categories'>
                        <h1>Accessories</h1>
                        <img src={image97} alt='Accessories image' />
                    </div>

                </div>

            </section>
        </>
    )
}

export default Categories
