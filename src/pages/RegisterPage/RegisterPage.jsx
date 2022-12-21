import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './register.css'
import { registerUser } from '../../features/user/userActions';
import { useEffect } from 'react';

const RegisterPage = () => {
  const { isSuccess } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = user;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({
      ...user,
      [name]: value
    }))
  };

  const handleSubmit = () => {
    dispatch(registerUser({ name, email, password }));
    setUser({
      name: '',
      email: '',
      password: ''
    })
  };

  let token = localStorage.getItem('token')

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        navigate('/login')
      }, 1000)
    };

    if (token) {
      navigate('/')
    }
  }, [isSuccess, token])
  return (
    <div className='registration--page'>
      <div className='register--container'>
        <div className='register--form'>
          <h2>Register</h2>
          <div className='register--form__inputs'>
            <div className='form--item'>
              <label>Name:</label>
              <input 
                type={"text"} 
                placeholder='Text Input' 
                name="name" 
                value={name} 
                onChange={handleChange} 
              />
            </div>
            <div className='form--item'>
              <label>Email:</label>
              <input 
                type={"email"} 
                placeholder='Email Input' 
                name='email'
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className='form--item'>
              <label>Password:</label>
              <input 
                type={"password"} 
                placeholder='Password Input' 
                name='password'
                value={password}
                onChange={handleChange}
              />
            </div>
          </div>
          <button className='form--btn' onClick={handleSubmit}>
            Sign up
          </button>
          <div className='form--text'>
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