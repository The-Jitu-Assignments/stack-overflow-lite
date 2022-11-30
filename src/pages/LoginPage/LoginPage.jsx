import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'

const LoginPage = () => {
  const navigate = useNavigate();
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
              <label>Email:</label>
              <input type={"email"} placeholder='Enter your email address' />
            </div>
            <div className='form--item'>
              <label>Password:</label>
              <input type={"password"} placeholder='Enter your email address' />
            </div>
          </div>
          <button className='login--btn'>
            Submit
          </button>
          <div className='login--text'>
            I do not have an account yet...<span onClick={() => navigate('/register')}>Register Now</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;