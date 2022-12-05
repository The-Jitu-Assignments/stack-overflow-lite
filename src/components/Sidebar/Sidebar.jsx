import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillHome,  } from 'react-icons/ai';
import { GrLanguage } from 'react-icons/gr';
import Button from '../Button/Button';

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
    </div>
  )
}

export default Sidebar