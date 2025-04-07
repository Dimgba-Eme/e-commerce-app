import React, { useState } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'

const LoginSignup = () => {
  const [login] = useState(true);
  return (
    <main className='login-signup-container'>
      {login ? (<Login />) : (<Signup />)}


    </main>
  )
}

export default LoginSignup
