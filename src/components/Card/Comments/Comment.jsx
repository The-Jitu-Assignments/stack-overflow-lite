import React from 'react'
import { createAvatar } from '../../../helpers/avatar/CreateAvatar'
import './comment.css'

const Comment = ({ comment }) => {
  const avatar = createAvatar(comment.name);
  return (
    <div className='comment--box'>
      <div className='comment--header'>
        <div className='comment--header__img'>
          {comment.img ? (
            <img src={comment.imgUrl} alt='comment--img' className='comment--img' /> 
          ) : (<div className='comment--avatar'>{avatar}</div>)}
        </div>
        <div></div>
      </div>
      <div>{comment.comment}</div>
    </div>
  )
}

export default Comment;