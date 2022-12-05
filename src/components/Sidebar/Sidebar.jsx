import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillHome,  } from 'react-icons/ai';
import { GrLanguage } from 'react-icons/gr';
import Button from '../Button/Button';
import './sidebar.css';
import { RxDoubleArrowLeft } from 'react-icons/rx';

const Sidebar = ({ close }) => {
  const navigate = useNavigate();
  return (
    <div className='modal--body' onClick={(e) => e.stopPropagation()}>
      <div className='modal--header'>
        <Button method={close} className={"closeBtn"} text={"x"} />
      </div>
      <div className='modal--content'>
        <div className="modal--content__item" onClick={() => {navigate('/'); close()}}>
          <AiFillHome />
          Home
        </div>
        <div className="modal--content__item" onClick={() => {navigate('/about-us'); close()}}>
          <GrLanguage />
          About Us
        </div>
      </div>
      <div className="sidebar--footer">
        <h3>Auth</h3>
        <div className="sidebar--footer__item">
          Login
        </div>
        <div className="sidebar--footer__item">
          Logout
        </div>
        <div className="sidebar--footer__user">
          Johnkatua99@gmail.com
          <RxDoubleArrowLeft />
        </div>
      </div>
    </div>
  )
}

export default Sidebar