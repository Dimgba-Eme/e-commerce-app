import React, { useState, useRef, useEffect } from 'react'
import './signup.scss'
import { validateEmail } from './utils';
import { Link, useNavigate } from 'react-router-dom';


const PasswordErrorMessage = () => {
    return (
        <p style={{ color: 'red' }}>Password must not be less than eight characters!</p>
    )
}

const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        value: '',
        isFocused: false,
    });

    const isFormValid = () => {
        return (
            name && email && validateEmail(email) && password.value.length >= 8
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        clearForm();
        alert("Signed Up")
    }

    const clearForm = () => {
        setName("");
        setEmail("");
        setPassword({
            value: '',
            isFocused: false,
        })
    }

    const inputRef = useRef();

    useEffect(() => {
        document.title = "Signup | Dimmy's Store"
        inputRef.current.focus();
    }, [])

    const redirect = useNavigate();

    return (
        <section className='signup-container'>
            <h1>Sign Up</h1>
            <div className='signup-inner'>
                <form onSubmit={handleSubmit}>
                    <input type='text' ref={inputRef} id='name' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} />
                    <br />
                    <input type='email' id='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <input type='password' id='pass' placeholder='Enter password' value={password.value} onChange={(e) => setPassword({ ...password, value: e.target.value })} onBlur={(e) => setPassword({ ...password, isFocused: true })} />
                    {password.isFocused && password.value.length < 8 ? (<PasswordErrorMessage />) : null}
                    <br />
                    <button type='submit' disabled={!isFormValid()}>Sign Up</button>
                    <div>
                        <p>Forgot password?</p>
                        <p onClick={() => redirect(- 1)} className='login-redirect'>Already have an account? Login here</p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Signup
