import React from 'react'
import { useNavigate } from 'react-router-dom'
import './register.css'

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <div className='registration--page'>
      <div className='register--container'>
        <div className='register--form'>
          <h2>Register</h2>
          <div className='register--form__inputs'>
            <div className='form--item'>
              <label>Email:</label>
              <input type={"email"} placeholder='Enter your email address' />
            </div>
            <div className='form--item'>
              <label>Email:</label>
              <input type={"email"} placeholder='Enter your email address' />
            </div>
            <div className='form--item'>
              <label>Password:</label>
              <input type={"password"} placeholder='Enter your email address' />
            </div>
          </div>
          <button className='login--btn'>
            Sign up
          </button>
          <div className='login--text'>
            Already have an account...<span onClick={() => navigate('/login')}>Login Now</span>
          </div>
        </div>
        <div className='register--image'>
          <img src="/assets/img1.jpg" alt='register-img' />
        </div>
      </div>
    </div>
  )
}

export default RegisterPage;