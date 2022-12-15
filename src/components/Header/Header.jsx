import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/user/userSlice';
import Sidebar from '../Sidebar/Sidebar';
import './header.css'
import Modal from '../Modal/Modal';
import AddQuestion from '../AddQuestion/AddQuestion';

const Header = () => {
  const [ open, setIsOpen ] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const [ selectedItem, setSelectedItem ] = useState('');
  const navigate = useNavigate();
  const style = { cursor: 'pointer' };

  const handleOpen = (text) => {
    setIsOpen(true);
    setSelectedItem(text);
  }

  const handleClose = () => {
    setIsOpen(false);
    setSelectedItem('');
  };

  let content = '';

  if (selectedItem === 'sidebar') {
    content = <Sidebar close={handleClose} />
  } else if (selectedItem === 'add-qn') {
    content = <AddQuestion close={handleClose} />
  };

  return (
    <div className='header'>
      <Modal open={open} close={handleClose} content={content} />
      <div className='header--box'>
        <div className='header--intro'>
          <div className='header--menu'>
            <AiOutlineMenu style={style} fontSize={"1.7em"} onClick={() => handleOpen('sidebar')} />
          </div>
          <div onClick={() => navigate('/')} className='header--title'>
          <img src='/assets/johnQA.png' alt='header--title' />
          </div>
        </div>
        <div className='header--auth'>
          {user ? (
            <div className='auth--btn'>
              {user}
              <div className='auth--tooltip'>
                <div className='auth--tooltip__item' onClick={() => navigate('/profile')}>Profile</div>
                {/* <div className='auth--tooltip__item' onClick={() => navigate('/my-questions')}>My questions</div> */}
                <div className='auth--tooltip__item' onClick={() => handleOpen('add-qn')}>Add a question</div>
                <div className='auth--tooltip__item' onClick={() => dispatch(logout())}>Logout</div>
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