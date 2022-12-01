import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import './header.css'

const Header = () => {
  const navigate = useNavigate();
  const style = { cursor: 'pointer' }
  return (
    <div className='header'>
      <div className='header--box'>
        <div className='header--intro'>
          <div className='header--menu'>
            <AiOutlineMenu style={style} fontSize={"1.7em"} />
          </div>
          <div onClick={() => navigate('/')} className='header--title'>
          <img src='/assets/johnQA.png' alt='header--title' />
          </div>
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