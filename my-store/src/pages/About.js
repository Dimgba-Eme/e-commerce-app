import React, { useEffect } from 'react'
import './about.scss'
import about_hero from '../assets/images/about_hero.png'
import Newsletter from '../components/Newsletter'


const About = () => {

  useEffect(() => {
    document.title = "About | Dimmy's Store"
  })

  return (
    <main className='about-wrapper'>

      <div className='about-container'>
        <h1>About Us</h1>
        <section className='about-inner'>
          <img src={about_hero} alt='' />
          <div className='about-description'>
            <p>Dimmy's Store was born out of a passion for innovation and a desire to revolutionize
              the way people shop online. Our journey began with a simple idea: to provide
              a platform where customers can easily discover, explore, and purchase a wide
              range of products from the comfort of their homes.</p>
            <br />
            <p>
              Since our inception, we've worked tirelessly to curate a diverse selection
              of high-quality products that cater to every taste and preference.
            </p>
            <br />
            <br />
            <h4>Our Mission</h4>
            <p>Our mission at Dimmy's Store is to empower customers with choice, convenience,
              and confidence. We're dedicated to providing a seamless shopping experience
              that exceeds expectations, from browsing and ordering to delivery and beyond.
            </p>
          </div>
        </section>

        <h1>Why Choose Us</h1>
        <section className='why-choose-container'>
          <article className='why-us'>
            <h4>Quality Assurance:</h4>
            <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </article>
          <article className='why-us'>
            <h4>Convenience:</h4>
            <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </article>
          <article className='why-us'>
            <h4>Exceptional Customer Service:</h4>
            <p>Our team of dedicated professionals is here to assist you all the way, ensuring your satisfaction is our top priority.</p>
          </article>
        </section>
      </div>
      <Newsletter />
    </main>
  )
}

export default About
