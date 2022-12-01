import React from 'react'
import './question.card.css'

const QuestionCard = ({ post }) => {
  return (
    <div className='question--card'>
      <div className='question--card__header'>
        <div className='question--user__img'>
          <img src={post.image} alt="user--face" />
        </div>
        <div className='question--user__details'>Data</div>
        <div className='question--user__links'>Links</div>
      </div>
      <div className='question--card__body'>Body</div>
      <div className='question--card__footer'>Footer</div>
    </div>
  )
}

export default QuestionCard;