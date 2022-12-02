import React from 'react';
import './modal.css';

const Modal = ({ open, close, content }) => {
  if (!open) return null;
  return (
    <div className='modal--overlay' onClick={close}>
      {content}
    </div>
  )
}

export default Modal;