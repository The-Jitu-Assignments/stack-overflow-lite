import React, { useState } from 'react';
import Button from '../Button/Button';
import './reply.css';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswer } from '../../features/answer/answerAction';
import { useEffect } from 'react';

const Reply = ({ close }) => {
  const dispatch = useDispatch();
  const { selectedQuiz } = useSelector(state => state.quiz);

  const [response, setResponse] = useState({
    comment: '',
    questionId: ''
  });

  const handleChange = (e) => {
    setResponse((comment) => ({
      ...comment,
      [e.target.name]: e.target.value
    }))
  };

  const handleSubmit = () => {
    dispatch(addAnswer(response));
    close();
  };

  useEffect(() => {
    if (selectedQuiz) {
      setResponse({
        questionId: selectedQuiz?.question.id,
        comment: ''
      })
    }
  }, [selectedQuiz])

  return (
    <div className='reply--modal' onClick={(e) => e.stopPropagation()}>
      <div className='reply--modal__header'>
        <h2>Reply</h2>
        <Button method={close} className={"closeBtn"} text={"x"} />
      </div>
      <textarea 
        placeholder="Add a response to the question"
        name='comment'
        value={response.comment}
        onChange={handleChange}
      ></textarea>
      <Button method={handleSubmit} className={'submitButton'} text={"Submit"} />
    </div>
  )
}

export default Reply