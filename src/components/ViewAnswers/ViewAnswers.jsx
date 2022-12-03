import React from 'react';
import './viewanswer.css'
import Button from '../Button/Button'

const ViewAnswers = ({ close }) => {
  return (
    <div className='viewAnswer--modal' onClick={close}>
      <div className='viewAnswer--header'>
        <h2>Answers</h2>
        <Button method={close} className={"closeBtn"} text={"x"} />
      </div>
      <div className='viewAnswer--body'>
        <div className="test--item">Item1</div>
        <div className="test--item">Item2</div>
        <div className="test--item">Item3</div>
        <div className="test--item">Item4</div>
        <div className="test--item">Item5</div>
        <div className="test--item">Item6</div>
        <div className="test--item">Item7</div>
        <div className="test--item">Item8</div>
        <div className="test--item">Item9</div>
        <div className="test--item">Item10</div>
      </div>
    </div>                                                                                                                                                                            
  )
}

export default ViewAnswers