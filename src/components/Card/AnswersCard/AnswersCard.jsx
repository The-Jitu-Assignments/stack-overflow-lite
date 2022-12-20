import React, { useState, useEffect } from 'react'
import Button from '../../Button/Button'
import Comment from '../Comments/Comment';
import './answersCard.css'
import { createAvatar } from '../../../helpers/avatar/CreateAvatar';
import { useDispatch, useSelector } from 'react-redux';
import { addLikeOrDislike, getAnswer, setAnswerAsPreferred } from '../../../features/answer/answerAction';
import { addComment } from '../../../features/comment/commentActions';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { fetchQuestions, getQuestion } from '../../../features/question/quizActions';
// import { fetchQuestions } from '../../../features/question/quizActions';
// import { getQuestion } from '../../../features/question/quizSlice';

const AnswersCard = ({ answer, post }) => {
  const [data, setData] = useState({
    comment: '',
    answerId: ''
  });
  const dispatch = useDispatch();
  const { selectedAnswer } = useSelector(state => state.answers);
  console.log(selectedAnswer);
  const { selectedQuiz } = useSelector(state => state.quiz);
  const { user } = useSelector(state => state.user);
  const [ show, setShow ] = React.useState(false);
  const { name } = answer;
  const avatar = createAvatar(name);

  useEffect(() => {
    if (selectedAnswer) {
      setData({
        comment: '',
        answerId: selectedAnswer.answer.id
      })
    }
    dispatch(getQuestion(post.id));
  }, [selectedAnswer]);

  useEffect(() => {
    dispatch(getAnswer(answer.id))
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({
      ...data,
      [name]: value
    }))
  };

  const handleSubmit = () => {
    dispatch(addComment(data));
    setData({
      comment: '',
      answerId: ''
    })
  };

  const handleLikeDislike = (value) => {
    if (answer.id === selectedAnswer?.answer.id) {
      dispatch(addLikeOrDislike({ answerId: selectedAnswer?.answer.id, total: value }))
    }
  }

  

  return (
    <div className='answers--container' onClick={() => dispatch(getAnswer(answer.id))}>
      <div className='answersCard'>
        <div className='answersCard__header'>
          <div className='answersCard__header--user'>
            {answer.imgUrl ? (
              <img src={answer.imgUrl} alt="user-img" />
            ): (<div className='avatar'>{avatar.toUpperCase()}</div>)}  
            <div>
              <h3>{answer.name}</h3>
              <p>{answer.days} ago</p>
            </div>
          </div>
          {user?.id === selectedQuiz?.question.userId && (
            <Button 
              className={"accept--btn"} 
              text={answer.accepted === 1 ? 'Accepted' : 'Mark as Answer'} 
              method={() => dispatch(setAnswerAsPreferred({ 
                id: answer?.id, values: { questionId: selectedQuiz?.question.id, comment: answer.comment, accepted: 1 }
              }))} 
            />
          )}
        </div>
        <div>
          {answer.comment}
        </div>
        <div className='answersCard--footer'>
          <Button 
            className={"like--btn"} 
            text={
              <div className='answer--text'>
                <AiFillLike size={'1.5em'} />
                <span>{answer.totalLikes}</span>
              </div>
            }
            method={() => handleLikeDislike(1)}
            title={"Like"}
          />
          <Button 
            className={"like--btn"} 
            text={
              <div className='answer--text'>
                <span className='dislike--btn'>
                  <AiFillDislike size={'1.5em'} />
                </span>
                <span>{answer.totalDislikes}</span>
              </div>
            } 
            method={() => handleLikeDislike(-1)}
            title={"Dislike"}
          />
          <Button className={"like--btn"} text={"View comments"} method={() => setShow(!show)} />
        </div>
      </div>
      {show && (
      <div className='answer--comments'>
        <div className='answer--comments__input'>
          <input 
            type={"text"} 
            placeholder='Add a comment' 
            name='comment'
            value={data.comment}
            onChange={handleChange}
          />
          <Button className={"comments--btn"} text={"submit"} method={handleSubmit} />
        </div>
        <div className='comment--container'>
          {selectedAnswer?.comments.length > 0 ? (
            <>
              {selectedAnswer?.comments.map((comment) => {
                return (
                  <Comment comment={comment} />
                )
              })}
            </>
          ) : (<div>No Comments</div>)}
        </div>
      </div>
      )}
    </div>
  )
}

export default AnswersCard