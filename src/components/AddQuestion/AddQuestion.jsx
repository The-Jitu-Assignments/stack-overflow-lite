import React from 'react';
import Button from '../Button/Button';
import './addquestion.css'

const AddQuestion = ({ close }) => {
  return (

    <div onClick={(e) => e.stopPropagation()} className='addquestion--modal'>
      <div className='addquestion--modal__header'>
        <h2>Post a Question</h2>
        <Button method={close} className={"closeBtn"} text={"X"} />
      </div>
      <textarea placeholder='Enter your question and make it descriptive...'></textarea>
      <Button method={close} className={"submitButton"} text={"submit"} />
    </div>
  )
}

export default AddQuestion;