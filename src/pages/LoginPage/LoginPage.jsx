import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './login.css'
import { loginUser } from '../../features/user/userActions';
import { useEffect } from 'react';

const LoginPage = () => {
  const { isSuccess } = useSelector(state => state.user);
  console.log(isSuccess);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({
      ...user,
      [name]: value
    }))
  };

  const handleSubmit = () => {
    dispatch(loginUser(user));
    setUser({
      email: '',
      password: ''
    })
  };

  let token = localStorage.getItem('token');

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        navigate('/')
      }, 1000)
    }

    if (token) {
      navigate('/')
    }
  }, [isSuccess, token]);

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
              <input 
                type={"email"} 
                placeholder='Email Input'
                name='email'
                value={user.email}
                onChange={handleChange} 
              />
            </div>
            <div className='form--item'>
              <label>Password:</label>
              <input 
                type={"password"} 
                placeholder='Password Input' 
                name='password'
                value={user.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <button className='form--btn' onClick={handleSubmit}>
            Login
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