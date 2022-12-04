import React from 'react';
import Button from '../Button/Button';
import './reply.css';

const Reply = ({ close }) => {
  return (
    <div className='reply--modal' onClick={(e) => e.stopPropagation()}>
      <div className='reply--modal__header'>
        <h2>Reply</h2>
        <Button method={close} className={"closeBtn"} text={"x"} />
      </div>
      <textarea placeholder="Add a response to the question"></textarea>
      <Button method={close} className={'submitButton'} text={"Submit"} />
    </div>
  )
}

export default Reply