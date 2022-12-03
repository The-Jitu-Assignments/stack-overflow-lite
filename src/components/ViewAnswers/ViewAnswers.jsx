import React from 'react';
import './viewanswer.css'

const ViewAnswers = ({ close }) => {
  return (
    <div className='viewAnswer--modal' onClick={close}>
      <div className='viewAnswer--header'>Header</div>
    </div>                                                                                                                                                                            
  )
}

export default ViewAnswers