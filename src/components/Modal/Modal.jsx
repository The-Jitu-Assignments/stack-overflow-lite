import React from 'react';
import './modal.css';
import { AiFillHome,  } from 'react-icons/ai';
import { GiPapers, GiPriceTag } from 'react-icons/gi'
import { BsQuestionSquareFill } from 'react-icons/bs';
import { GrLanguage } from 'react-icons/gr';

const Modal = ({ open, close }) => {
  if (!open) return null;
  return (
    <div className='modal--overlay' onClick={close}>
      <div className='modal--body' onClick={(e) => e.stopPropagation()}>
        <div className='modal--header'>
          <div onClick={close} className='modal--close__btn'>
            x
          </div>
        </div>
        <div className='modal--content'>
          <div className="modal--content__item">
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
      </div>
    </div>
  )
}

export default Modal;