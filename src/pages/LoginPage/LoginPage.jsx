import React from 'react';
import './login.css'

const LoginPage = () => {
  return (
    <div className='login--page'>
      <div className='login--container'>
        <div className='login--image'>
          <img src="/assets/img1.jpg" alt="login-image" />
        </div>
        <div className='login--form'>
          <h2>Login</h2>
          <div className='login--form__item'>
            <div className='form--item'>
              <label>Email</label>
              <input type={"email"} placeholder='Enter your email address' />
            </div>
            <div className='form--item'>
              <label>Password</label>
              <input type={"password"} placeholder='Enter your email address' />
            </div>
          </div>
          <button>
            Submit
          </button>
          <div>
            I do not have an account yet...<span>Register Now</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;