import React from 'react';
import Button from '../Button/Button';
import './reply.css';

const Reply = ({ close }) => {
  return (
    <div className='reply--modal' onClick={close}>
      <div className='reply--modal__header'>Reply</div>
      <textarea placeholder="Add a response to the question"></textarea>
      <Button method={close} className={'submitButton'} text={"Submit"} />
    </div>
  )
}

export default Reply