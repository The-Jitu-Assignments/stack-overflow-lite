import React from 'react';
import './reply.css';

const Reply = ({ close }) => {
  return (
    <div className='reply--modal' onClick={close}>Reply</div>
  )
}

export default Reply