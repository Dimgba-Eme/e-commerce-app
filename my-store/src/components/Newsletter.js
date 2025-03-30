import React from 'react'
import './newsletter.scss'

const Newsletter = () => {
    return (
        <>
            <section className='newsletter-container'>
                <div className='title-container'>
                    <h1>Subscribe To Our Newsletter</h1>
                    <p>Let us inform and update you on all important and latest information. </p>
                </div>

                <div className='input-container'>
                    <input type='email' value='' onChange='' placeholder='Email' id='email' />
                    <button>Subscribe</button>
                </div>

            </section>
        </>
    )
}

export default Newsletter
