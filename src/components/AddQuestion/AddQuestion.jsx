import React, { useState } from 'react';
import Button from '../Button/Button';
import './addquestion.css'
import { ClipLoader } from 'react-spinners';
import { useSelector } from 'react-redux';

const AddQuestion = ({ close }) => {
  const { isLoading } = useSelector(state => state.quiz);
  const [question, setQuestion] = useState('');
  return (
    <div onClick={(e) => e.stopPropagation()} className='addquestion--modal'>
      <div className='addquestion--modal__header'>
        <h2>Post a Question</h2>
        <Button method={close} className={"closeBtn"} text={"X"} />
      </div>
      <textarea placeholder='Enter your question and make it descriptive...'></textarea>
      <Button method={() => setIsLoading(!loading)} className={"submitButton"} text={isLoading ? <ClipLoader color='white' size={20} /> : 'Submit'} />
    </div>
  )
}

export default AddQuestion;