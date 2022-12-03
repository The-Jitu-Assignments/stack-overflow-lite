import React from 'react'
import Button from '../../Button/Button'
import './answersCard.css'

const AnswersCard = ({ post }) => {
  return (
    <div className='answersCard'>
      <div className='answersCard__header'>
        <div className='answersCard__header--user'>   
          <img src={post.image} alt="user-img" />
          <h3>{post.userName}</h3>
        </div>
        <Button className={"accept--btn"} text={"Accept"} />
      </div>
      <div>
        {post.question.details}
      </div>
      <div className='answersCard--footer'>
        <Button className={"like--btn"} text={"Like"}/>
        <Button className={"like--btn"} text={"Dislike"} />
        <Button className={"like--btn"} text={"Comment"} />
      </div>
    </div>
  )
}

export default AnswersCard