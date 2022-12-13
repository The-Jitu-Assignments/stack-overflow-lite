import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './question.card.css';
import { AiOutlineEllipsis, AiFillLike, AiFillDislike } from 'react-icons/ai';
import Modal from '../../Modal/Modal';
import Reply from '../../Reply/Reply';

const QuestionCard = ({ post, selectQuiz }) => {
  const navigate = useNavigate();
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
  };

  return (
    <div className='question--card' onClick={selectQuiz}>
      <Modal open={isOpen} close={handleClose} content={content} />
      <div className='question--card__header'>
        <div className='question--user__img' onClick={() => navigate('/profile')}>
          <img src={post.imgUrl} alt="user--face" />
        </div>
        <div className='question--user__details'>
          <h3>{post.name}</h3>
          <div className='question--user__days'>{post.days + ' ago'}</div>
        </div>
        <div className='question--user__links'>
          <AiOutlineEllipsis fontSize={"1.7em"} />
          <div className='question--tooltip'>
            <div className='question--tooltip__item' onClick={() => handleOpen('reply')}>Reply</div>
            <div className='question--tooltip__item' onClick={() => setSelectedItem('reply')}>Delete Question</div>
          </div>
        </div>
      </div>
      <div className='question--card__body'>
        {post.question}
      </div>
      {/* <div className='question--card__footer'>
        <button className='question--btn'>
          Like
          <AiFillLike />
        </button>
        <button className='question--btn'>
          Dislike
          <AiFillDislike />
        </button>
      </div> */}
    </div>
  )
}

export default QuestionCard;