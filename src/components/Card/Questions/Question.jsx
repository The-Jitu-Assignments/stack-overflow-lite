import React, { useState } from 'react'
import './question.card.css';
import { AiOutlineEllipsis, AiFillLike, AiFillDislike } from 'react-icons/ai';
import Modal from '../../Modal/Modal';
import User from '../../User/User';
import Reply from '../../Reply/Reply';
import ViewAnswers from '../../ViewAnswers/ViewAnswers';

const QuestionCard = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const handleOpen = (text) => {
    setIsOpen(true)
    setSelectedItem(text);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedItem('')
  };

  let content = '';

  if (selectedItem === 'reply') {
    content = <Reply close={handleClose} />
  } else if (selectedItem === 'view-user') {
    content = <User close={handleClose} post={post} />
  } else if (selectedItem === 'view-ans') {
    content = <ViewAnswers close={handleClose} />
  }

  return (
    <div className='question--card'>
      <Modal open={isOpen} close={handleClose} content={content} />
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
            <div className='question--tooltip__item' onClick={() => handleOpen('view-user')}>View User</div>
            <div className='question--tooltip__item' onClick={() => handleOpen('view-ans')}>View Answers</div>
            <div className='question--tooltip__item' onClick={() => handleOpen('reply')}>Reply</div>
            <div className='question--tooltip__item' onClick={() => setSelectedItem('reply')}>Delete Question</div>
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