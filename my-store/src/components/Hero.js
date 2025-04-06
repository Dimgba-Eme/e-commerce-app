import React from 'react'
import HeroImage from '../assets/images/hero_image.jpeg'
import './hero.scss'
import { useNavigate } from 'react-router-dom'

function Hero() {
    const redirect = useNavigate();
    return (
        <>
            <section className='hero-container'>
                <div className='hero-inner'>

                    <div className='hero-offer'>
                        <h1>SPECIAL OFFER!!!</h1>
                        <h1>50% OFF ON ALL SALES</h1>
                        <p>Take advantage of this amazing offer!</p>
                    </div>

                    <div className='hero-image-container'>
                        <img src={HeroImage} className='hero-image' alt='Hero pic' />
                    </div>
                </div>
                <div className='btn-container'>
                    <button className='cta-btn' onClick={() => redirect('/products')}>SHOP NOW</button>
                </div>

            </section>
        </>
    )
}

export default Hero
