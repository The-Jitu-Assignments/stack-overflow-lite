import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillHome,  } from 'react-icons/ai';
import { GiPapers, GiPriceTag } from 'react-icons/gi'
import { BsQuestionSquareFill } from 'react-icons/bs';
import { GrLanguage } from 'react-icons/gr';
import Button from '../Button/Button';

const Sidebar = ({ close }) => {
  const navigate = useNavigate();
  return (
    <div className='modal--body' onClick={(e) => e.stopPropagation()}>
      <div className='modal--header'>
        <Button method={close} className={"closeBtn"} text={"x"} />
        {/* <div onClick={close} className='modal--close__btn'>
          x
        </div> */}
      </div>
      <div className='modal--content'>
        <div className="modal--content__item" onClick={() => {navigate('/'); close()}}>
          <AiFillHome />
          Home
        </div>
        <div className="modal--content__item" onClick={() => {navigate('/all-questions'); close()}}>
          <GiPapers />
          All Questions
        </div>
        <div className="modal--content__item" onClick={() => {navigate('/unanswered-questions'); close()}}>
          <BsQuestionSquareFill />
          Unanswered Questions
        </div>
        <div className="modal--content__item" onClick={() => {navigate('/about-us'); close()}}>
          <GrLanguage />
          About Us
        </div>
        <div className="modal--content__item" onClick={() => {navigate('/pricing'); close()}}>
          <GiPriceTag />
          Pricing
        </div>
      </div>
    </div>
  )
}

export default Sidebar