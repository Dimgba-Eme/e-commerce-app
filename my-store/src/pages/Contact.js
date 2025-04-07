import React, { useEffect } from 'react'
import './contact.scss'
import contact_us from '../assets/images/contact_us.png'
import Newsletter from '../components/Newsletter'

const Contact = () => {

  useEffect(() => {
    document.title = "Contact | Dimmy's Store"
  })
  return (
    <main className='contact-wrapper'>
      <h1>Contact Us</h1>
      <section className='contact-inner'>
        <img src={contact_us} alt='' />

        <div className='contact-info'>
          <h3>Our Store</h3>
          <br />
          <br />
          <p>54709 Willms Station
            Suite 350, Washington, USA
          </p>
          <br />
          <br />
          <p>Tel: +234 708 549 5430</p>
          <p>Email: hello@dimgbaeme.com.ng</p>
        </div>
      </section>
      <br />
      <br />
      <br />

      <Newsletter />
    </main>
  )
}

export default Contact
