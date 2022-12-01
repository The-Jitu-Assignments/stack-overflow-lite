import React from 'react';
import './modal.css'

const Modal = ({ open, close }) => {
  if (!open) return null;
  return (
    <div className='modal--overlay'>
      <div className='modal--body'>
        <div className='modal--header'>
          <div onClick={close} className='modal--close__btn'>
            x
          </div>
        </div>
        <div className='modal--content'>
          <div className="modal--content__item">
            Home
          </div>
          <div className="modal--content__item">
            All Questions
          </div>
          <div className="modal--content__item">
            Unanswered Questions
          </div>
          <div className="modal--content__item">
            About Us
          </div>
          <div className="modal--content__item">
            Pricing
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;