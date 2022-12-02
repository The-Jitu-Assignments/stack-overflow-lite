import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillHome,  } from 'react-icons/ai';
import { GiPapers, GiPriceTag } from 'react-icons/gi'
import { BsQuestionSquareFill } from 'react-icons/bs';
import { GrLanguage } from 'react-icons/gr';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='modal--header'>
        <div onClick={close} className='modal--close__btn'>
          x
        </div>
      </div>
      <div className='modal--content'>
        <div className="modal--content__item" onClick={() => {navigate('/'); close()}}>
          <AiFillHome />
          Home
        </div>
        <div className="modal--content__item">
          <GiPapers />
          All Questions
        </div>
        <div className="modal--content__item">
          <BsQuestionSquareFill />
          Unanswered Questions
        </div>
        <div className="modal--content__item">
          <GrLanguage />
          About Us
        </div>
        <div className="modal--content__item">
          <GiPriceTag />
          Pricing
        </div>
      </div>
    </>
  )
}

export default Sidebar