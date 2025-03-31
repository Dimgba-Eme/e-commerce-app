import React, { useState } from 'react'
import './newsletter.scss'
import { validateEmail } from './utils';


const Newsletter = () => {

    const [email, setEmail] = useState("");

    const getIsFormValid = () => {
        return (
            email && validateEmail(email)
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        clearForm();
        alert("Subscribed!")
    }

    const clearForm = () => {
        setEmail("");
    }

    return (

        <section className='newsletter-container'>
            <div className='title-container'>
                <h1>Subscribe To Our Newsletter</h1>
                <p>Let us inform and update you on all important and latest information. </p>
            </div>

            <div className='input-container'>
                <form onSubmit={handleSubmit}>
                    <input type='email' placeholder='Enter your email' id='email' value={email} onChange={e => setEmail(e.target.value)} onBlur={e => setEmail(e.target.value)} />
                    <button type='submit' disabled={!getIsFormValid()}>Subscribe</button>
                </form>
            </div>

        </section>

    )
}


export default Newsletter
