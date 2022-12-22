import React, { useState } from 'react';
import Button from '../Button/Button';
import './addquestion.css'
import { ClipLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import { addAQuestion } from '../../features/question/quizActions';

const AddQuestion = ({ close }) => {
  const { isLoading, isSuccess } = useSelector(state => state.quiz);
  const [quiz, setQuiz] = useState({
    question: ''
  })
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuiz((quiz) => ({
      ...quiz,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = () => {
    if (quiz.question === '') {
      return;
    }
    dispatch(addAQuestion(quiz));
    close()
  };

  return (
    <div onClick={(e) => e.stopPropagation()} className='addquestion--modal'>
      <div className='addquestion--modal__header'>
        <h2>Post a Question</h2>
        <Button method={close} className={"closeBtn"} text={"X"} />
      </div>
      <textarea 
        placeholder='Enter your question and make it descriptive...'
        name='question'
        value={quiz.question}
        onChange={handleChange}
        className={quiz.question === '' && 'quiz--error'}
      ></textarea>
      <Button 
        method={handleSubmit} 
        className={quiz.question ==='' ? 'disabled--submit' : "submitButton"} 
        text={isLoading ? <ClipLoader color='white' size={20} /> : 'Submit'} 
      />
    </div>
  )
}

export default AddQuestion;