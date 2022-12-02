import React from 'react'
import './question.card.css';
import { AiOutlineEllipsis } from 'react-icons/ai';

const QuestionCard = ({ post }) => {
  return (
    <div className='question--card'>
      <div className='question--card__header'>
        <div className='question--user__img'>
          <img src={post.image} alt="user--face" />
        </div>
        <div className='question--user__details'>
          <h3>{post.userName}</h3>
          <div className='question--user__days'>{post.days > 1 ? `${post.days} days ago` : `${post.days} day ago`}</div>
        </div>
        <div className='question--user__links'>
          <AiOutlineEllipsis />
          <div className='question--tooltip'></div>
        </div>
      </div>
      <div className='question--card__body'>
        {post.question.details}
      </div>
      <div className='question--card__footer'>
        <button className='question--btn'>
          View Answers
        </button>
        <button className='question--btn'>
          Reply
        </button>
      </div>
    </div>
  )
}

export default QuestionCard;