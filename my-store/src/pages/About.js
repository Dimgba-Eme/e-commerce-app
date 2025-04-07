import React from 'react'
import './about.scss'
import about_hero from '../assets/images/about_hero.png'
const About = () => {
  return (
    <main className='about-container'>
      <h1>About Us</h1>
      <div className='about-inner'>
        <img src={about_hero} alt='' />
        <div className='about-description'>
          <p>Dimmy's Store was born out of a passion for innovation and a desire to revolutionize
            the way people shop online. Our journey began with a simple idea: to provide
            a platform where customers can easily discover, explore, and purchase a wide
            range of products from the comfort of their homes.
            Since our inception, we've worked tirelessly to curate a diverse selection
            of high-quality products that cater to every taste and preference.</p>
          <h4>Our Mission</h4>
          <p>Our mission at Dimmy's Store is to empower customers with choice, convenience,
            and confidence. We're dedicated to providing a seamless shopping experience
            that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
        </div>
      </div>
    </main>
  )
}

export default About
