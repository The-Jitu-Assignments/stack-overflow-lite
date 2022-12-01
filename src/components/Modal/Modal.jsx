import React from 'react';
import './modal.css'

const Modal = ({ open, close }) => {
  if (!open) return null;
  return (
    <div className='modal--overlay'>
      <div className='modal--body'>
        <div className='modal--header'>
          <div onClick={close}>Close</div>
        </div>
      </div>
    </div>
  )
}

export default Modal;