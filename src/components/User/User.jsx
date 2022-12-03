import React from 'react';
import Button from '../Button/Button';
import './user.css'

const User = ({ close, post }) => {
  return (
    <div className='user--modal' onClick={(e) => e.stopPropagation()}>
      <div className='user--modal__header' onClick={close}>
        <Button method={close} className={"closeBtn"} text={"x"} />
      </div>
      <div className='user--modal__content'>
        <div className='user--content__header'>
          <div className='user--img'>
            <img src={post.image} alt="user-img" />
          </div>
          <div className='user--details'>
            <div>
              {post.userName}
            </div>
          </div>
          <div className='user--cards'>
            <div className='user--cards__item'>Questions Asked - 46</div>
            <div className='user--cards__item'>Questions Answered - 21</div>
          </div>
        </div>
        <div className='user--content__box'>
          <h3>{post.userName}'s Questions</h3>
          <div className='user--questions'>
            User
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default User