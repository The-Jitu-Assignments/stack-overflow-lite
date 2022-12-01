import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css'

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='header'>
      <div className='header--box'>
        <div className='header--intro'>
          <div onClick={() => navigate('/')}>Home</div>
        </div>
        <div className='header--auth'>
          <div onClick={() => navigate('/login')}>Login</div>
          <div onClick={() => navigate('/register')}>Signup</div>
        </div>
      </div>
    </div>
  )
}

export default Header;