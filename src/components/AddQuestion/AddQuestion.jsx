import React, { useState } from 'react';
import Button from '../Button/Button';
import './addquestion.css'
import { ClipLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import { addAQuestion } from '../../features/question/quizActions';

const AddQuestion = ({ close }) => {
  const { isLoading } = useSelector(state => state.quiz);
  const [question, setQuestion] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addAQuestion(question));
    setQuestion('');
    if (!isLoading) {
      close();
    }
  }
  return (
    <div onClick={(e) => e.stopPropagation()} className='addquestion--modal'>
      <div className='addquestion--modal__header'>
        <h2>Post a Question</h2>
        <Button method={close} className={"closeBtn"} text={"X"} />
      </div>
      <textarea 
        placeholder='Enter your question and make it descriptive...'
        name='question'
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      ></textarea>
      <Button 
        method={handleSubmit} 
        className={"submitButton"} 
        text={isLoading ? <ClipLoader color='white' size={20} /> : 'Submit'} 
      />
    </div>
  )
}

export default AddQuestion;