import React from 'react'
import Button from '../../Button/Button'
import './answersCard.css'

const AnswersCard = ({ post }) => {
  return (
    <div className='answersCard'>
      <div className='answersCard__header'>
        <div className='answersCard__header--user'>   
          <img src={post.image} alt="user-img" />
        </div>
        <Button className={"accept--btn"} text={"Accept"} />
      </div>
      <div>Body</div>
      <div>Footer</div>
    </div>
  )
}

export default AnswersCard