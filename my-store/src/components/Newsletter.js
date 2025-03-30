import React, { useState } from 'react'
import './newsletter.scss'
import { validateEmail } from './utils';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    
    const clearInput = () => {
        setEmail('');
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        clearInput();
        console.log("Submitted!")
    }

    return (
        <>
            <section className='newsletter-container'>
                <div className='title-container'>
                    <h1>Subscribe To Our Newsletter</h1>
                    <p>Let us inform and update you on all important and latest information. </p>
                </div>

                <div onSubmit={handleSubmit} className='input-container'>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' id='email' />
                    <button>Subscribe</button>
                </div>

            </section>
        </>
    )
}

export default Newsletter
