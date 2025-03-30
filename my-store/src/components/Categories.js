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
                    <div>
                        <img src={image4} alt='Hoodies image' />
                        <span></span>
                    </div>

                    <div>
                        <img src={image38} alt='T-shirt image' />
                        <span></span>
                    </div>

                    <div>
                        <img src={image59} alt='Headwear image' />
                        <span></span>
                    </div>

                    <div>
                        <img src={image82} alt='Footwear image' />
                        <span></span>
                    </div>

                    <div>
                        <img src={image97} alt='Accessories image' />
                        <span></span>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Categories
