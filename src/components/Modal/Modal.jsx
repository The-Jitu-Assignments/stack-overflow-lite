import React from 'react';
import './modal.css';

const Modal = ({ open, close, content }) => {
  return (
    <>
      {open && (
        <div className='modal--overlay' onClick={close}>
          {content}
        </div>
      )}
    </>
  )
}

export default Modal;