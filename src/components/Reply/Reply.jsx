import React from 'react';
import Button from '../Button/Button';
import './reply.css';

const Reply = ({ close }) => {
  return (
    <div className='reply--modal' onClick={close}>
      <div>Header</div>
      <textarea></textarea>
      <Button method={close} className={'submitBtn'} text={"Submit"} />
    </div>
  )
}

export default Reply