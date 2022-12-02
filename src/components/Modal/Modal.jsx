import React from 'react';
import { useNavigate } from 'react-router-dom';
import './modal.css';
import { AiFillHome,  } from 'react-icons/ai';
import { GiPapers, GiPriceTag } from 'react-icons/gi'
import { BsQuestionSquareFill } from 'react-icons/bs';
import { GrLanguage } from 'react-icons/gr';

const Modal = ({ open, close, content }) => {
  const navigate = useNavigate();
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