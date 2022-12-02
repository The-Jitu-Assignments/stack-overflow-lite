import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import './header.css'
import Modal from '../Modal/Modal';

const Header = () => {
  const { user } = useSelector(state => state.user);
  console.log(user)
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
        <div className='search'>
          <input type={"search"} alt='Search a question' placeholder='Search a question' />
        </div>
        <div className='header--auth'>
          {!user ? (
            <div className='auth--btn'>
              Johnkatua@gmail.com
              <div className='auth--tooltip'>
                <div className='auth--tooltip__item'>Profile</div>
                <div className='auth--tooltip__item'>My questions</div>
                <div className='auth--tooltip__item'>Logout</div>
              </div>
            </div>
          ) : (
            <>
              <div onClick={() => navigate('/login')} className='auth--btn'>
                Login
              </div>
              <div onClick={() => navigate('/register')} className='auth--btn'>Signup</div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header;