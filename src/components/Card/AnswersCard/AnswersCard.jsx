import React from 'react'
import Button from '../../Button/Button'
import './answersCard.css'

const AnswersCard = ({ post, answer }) => {
  console.log(answer)
  console.log('post', post)
  return (
    <div className='answers--container'>
      <div className='answersCard'>
        <div className='answersCard__header'>
          <div className='answersCard__header--user'>   
            <img src={post?.image} alt="user-img" />
            <h3>{post?.userName}</h3>
          </div>
          <Button className={"accept--btn"} text={"Mark as an Answer"} />
        </div>
        <div>
          {answer.answer}
        </div>
        <div className='answersCard--footer'>
          <Button className={"like--btn"} text={"Like"}/>
          <Button className={"like--btn"} text={"Dislike"} />
          <Button className={"like--btn"} text={"Comment"} />
        </div>
      </div>
      <div className='answer--comments'>
        <div className='answer--comments__input'>
          <input type={"text"} placeholder='Add a comment' />
          <Button text={"submit"} />
        </div>
        <div>B</div>
      </div>
    </div>
  )
}

export default AnswersCard