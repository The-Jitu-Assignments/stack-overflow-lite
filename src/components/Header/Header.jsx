import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css'

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='header'>
      <div onClick={() => navigate('/')}>Home</div>
      <div onClick={() => navigate('/login')}>Login</div>
      <div onClick={() => navigate('/register')}>Signup</div>
    </div>
  )
}

export default Header;