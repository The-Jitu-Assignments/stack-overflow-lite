import React from 'react';
import './viewanswer.css'

const ViewAnswers = ({ close }) => {
  return (
    <div className='viewAnswer--modal' onClick={close}>ViewAnswers</div>
  )
}

export default ViewAnswers