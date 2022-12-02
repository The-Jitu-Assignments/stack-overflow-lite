import React from 'react';
import './modal.css';

const Modal = ({ open, close, content }) => {
  if (!open) return null;
  return (
    <div className='modal--overlay' onClick={close}>
      <div className='modal--body' onClick={(e) => e.stopPropagation()}>
        {content}
      </div>
    </div>
  )
}

export default Modal;