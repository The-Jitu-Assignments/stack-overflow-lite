import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './question.card.css';
import { AiOutlineEllipsis } from 'react-icons/ai';
import Modal from '../../Modal/Modal';
import Reply from '../../Reply/Reply';
import Skeleton from 'react-loading-skeleton';
import { createAvatar } from '../../../helpers/avatar/CreateAvatar';
import { useDispatch, useSelector } from 'react-redux';
import AnswersCard from '../AnswersCard/AnswersCard';
import { deleteAQuestion, getQuestion } from '../../../features/question/quizActions';

const QuestionCard = ({ post }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const { selectedQuiz } = useSelector(state => state.quiz);
   const { answers, question } = selectedQuiz || [];
  const [openAnswers, setOpenAnswers] = useState(false);

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);


  const avatar = createAvatar(post?.name);

  const handleOpen = () => {
    if (post?.id !== undefined) {
      dispatch(getQuestion(post.id))
      setOpenAnswers(!openAnswers)
    }
  }

  const handleOpenReply = () => {
    dispatch(getQuestion(post.id));
    setIsOpen(true)
  }

  useEffect(() => {
    if (selectedQuiz?.question.id !== post.id) {
      setOpenAnswers(false)
    }
  }, [post, selectedQuiz]);

  return (
    <div>
      <div className='question--card'>
        <Modal open={isOpen} close={() => setIsOpen(false)} content={<Reply close={() => setIsOpen(false)} />} />
        <div className='question--card__header'>
          <div className='question--user__img' onClick={() => navigate(`/profile/${post.userId}`)}>
            {post.imgUrl ? (
              <img src={post.imgUrl} alt="user--face" />
            ) : (<div className='avatar'>{avatar}</div>)} 
          </div>
          <div className='question--user__details'>
            <h3>{post.name}</h3>
            <div className='question--user__days'>{post.days + ' ago'}</div>
          </div>
          {user?.id && (
          <div className='question--user__links'>
            <AiOutlineEllipsis fontSize={"1.7em"} />
            <div className='question--tooltip'>
              <div className='question--tooltip__item' onClick={handleOpenReply}>Reply</div>
              {user?.id === post.userId && (
                <div className='question--tooltip__item' onClick={() => dispatch(deleteAQuestion(post.id))}>Delete</div>
              )}
            </div>
          </div>
          )}
        </div>
        <div className='question--card__body'>
          {post.question || <Skeleton />}
        </div>
        <button onClick={handleOpen} className='view--ans__btn' disabled={post.totalAns === 0}>
          View Answers <span>{post.totalAns}</span>
        </button>
      </div>
      {openAnswers && 
        (
          <div className='homepage--answers'>
            {answers?.length > 0 ? (
              <>
                {answers?.map(answer => (
                  <AnswersCard key={answer.id} answer={answer} post={post} />
                ))}
              </>
            ) : (selectedQuiz && <h5>This question is not answered yet...</h5>)}
          </div>
        )
      }
    </div>
  )
}

export default QuestionCard;
