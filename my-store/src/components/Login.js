import React, { useState } from 'react'
import './login.scss'

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState({
        value: '',
        isFocused: false,
    });

    return (
        <section className='login-container'>
            <div className='login-inner'>
                <form>
                    <input type='email' id='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <input type='password' id='pass' placeholder='Enter password' value={password.value} onChange={(e) => setPassword({ ...password, value: e.target.value })} onBlur={(e) => setPassword({ ...password, isFocused: true })} />
                    <br />
                    <button type='submit'>Sign In</button>
                    <div>
                        <p>Forgot password?</p>
                        <p>Don't have and account? Sign up here</p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login

