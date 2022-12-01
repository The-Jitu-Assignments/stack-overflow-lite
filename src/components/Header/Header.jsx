import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import './header.css'
import Modal from '../Modal/Modal';

const Header = () => {
  const [ open, setIsOpen ] = useState(false);
  const navigate = useNavigate();
  const style = { cursor: 'pointer' }
  return (
    <div className='header'>
      <Modal open={open} close={() => setIsOpen(false)} />
      <div className='header--box'>
        <div className='header--intro'>
          <div className='header--menu'>
            <AiOutlineMenu style={style} fontSize={"1.7em"} onClick={() => setIsOpen(true)} />
          </div>
          <div onClick={() => navigate('/')} className='header--title'>
          <img src='/assets/johnQA.png' alt='header--title' />
          </div>
        </div>
        <div className='header--auth'>
          <div onClick={() => navigate('/login')} className='auth--btn'>Login</div>
          <div onClick={() => navigate('/register')} className='auth--btn'>Signup</div>
        </div>
      </div>
    </div>
  )
}

export default Header;