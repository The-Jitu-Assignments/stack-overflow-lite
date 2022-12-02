import React, { useState } from 'react'
import './question.card.css';
import { AiOutlineEllipsis, AiFillLike, AiFillDislike } from 'react-icons/ai';
import Modal from '../../Modal/Modal';
import User from '../../User/User';

const QuestionCard = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='question--card'>
      <Modal open={isOpen} close={() => setIsOpen(false)} content={<User close={() => setIsOpen(false)} />} />
      <div className='question--card__header'>
        <div className='question--user__img'>
          <img src={post.image} alt="user--face" />
        </div>
        <div className='question--user__details'>
          <h3>{post.userName}</h3>
          <div className='question--user__days'>{post.days > 1 ? `${post.days} days ago` : `${post.days} day ago`}</div>
        </div>
        <div className='question--user__links'>
          <AiOutlineEllipsis fontSize={"1.7em"} />
          <div className='question--tooltip'>
            <div className='question--tooltip__item' onClick={() => setIsOpen(true)}>View User</div>
            <div className='question--tooltip__item'>Reply</div>
            <div className='question--tooltip__item'>Accept Answer</div>
            <div className='question--tooltip__item'>View Answers</div>
            <div className='question--tooltip__item'>Delete Question</div>
          </div>
        </div>
      </div>
      <div className='question--card__body'>
        {post.question.details}
      </div>
      <div className='question--card__footer'>
        <button className='question--btn'>
          Like
          <AiFillLike />
        </button>
        <button className='question--btn'>
          Dislike
          <AiFillDislike />
        </button>
      </div>
    </div>
  )
}

export default QuestionCard;