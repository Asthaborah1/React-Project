import React from 'react'
import './Login.css'
import {logo1} from "../assets/lockup.png"



const Login = () => {
  return (
    <div>
            <div className='from-container'>
                <div >
                    {/* <img className='logo-login' src={logo1} /> */}
                </div>

                <input className='input-style-login' type='email' placeholder='Email' required name='email' />
                <input className='input-style-login' type='password'  placeholder='Password' required name='password' />

             
                <button onClick="#dashboard" className='btn-login'>Sign In</button>
                <button onClick="#dashboard" className='btn-need-an-account'>Need an account</button>

            </div>
        </div>
  )
}

export default Login
