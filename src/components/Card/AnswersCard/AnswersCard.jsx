import React from 'react'
import Button from '../../Button/Button'
import Comment from '../Comments/Comment';
import './answersCard.css'

const AnswersCard = ({ post, answer }) => {
  const [ show, setShow ] = React.useState(false);
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
          <Button className={"like--btn"} text={"View comments"} method={() => setShow(!show)} />
        </div>
      </div>
      {show && (
      <div className='answer--comments'>
        <div className='answer--comments__input'>
          <input type={"text"} placeholder='Add a comment' />
          <Button className={"comments--btn"} text={"submit"} />
        </div>
        <div className='comment--container'>
          <Comment />
        </div>
      </div>
      )}
    </div>
  )
}

export default AnswersCard