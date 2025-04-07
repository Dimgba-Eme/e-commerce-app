import React, { useEffect, useRef, useState } from 'react'
import './login.scss'
import { validateEmail } from './utils';
import { Link } from 'react-router-dom';
const PasswordErrorMessage = () => {
    return (
        <p style={{ color: 'red' }}>Password must not be less than eight characters!</p>
    )
}

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        value: '',
        isFocused: false,
    });

    const isFormValid = () => {
        return (
            email && validateEmail(email) && password.value.length >= 8
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        clearForm();
        alert("Logged In")
    }

    const clearForm = () => {
        setEmail("");
        setPassword({
            value: '',
            isFocused: false,
        })
    }

    const inputRef = useRef();

    useEffect(() => {
        document.title = "Login | Dimmy's Store"
        inputRef.current.focus();
    }, [])

    return (
        <section className='login-container'>
            <h1>Login</h1>
            <div className='login-inner'>
                <form onSubmit={handleSubmit}>
                    <input type='email' ref={inputRef} id='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <input type='password' id='pass' placeholder='Enter password' value={password.value} onChange={(e) => setPassword({ ...password, value: e.target.value })} onBlur={(e) => setPassword({ ...password, isFocused: true })} />
                    {password.isFocused && password.value.length < 8 ? (<PasswordErrorMessage />) : null}
                    <br />
                    <button type='submit' disabled={!isFormValid()}>Sign In</button>
                    <div>
                        <p>Forgot password?</p>
                        <Link to='/login-signup/signup'><p>Don't have and account? Sign up here</p></Link>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login

