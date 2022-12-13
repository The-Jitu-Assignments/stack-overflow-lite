import React from 'react';
import './modal.css';

const Modal = ({ open, close, content }) => {
  console.log(open)
  // if (!open) return null;
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