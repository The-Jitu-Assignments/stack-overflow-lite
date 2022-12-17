import React from 'react'
import Button from '../../Button/Button'
import Comment from '../Comments/Comment';
import './answersCard.css'
import { createAvatar } from '../../../helpers/avatar/CreateAvatar';
import { useDispatch, useSelector } from 'react-redux';
import { getAnswer } from '../../../features/answer/answerAction';

const AnswersCard = ({ answer }) => {
  console.log(answer)
  const dispatch = useDispatch();
  const { selectedAnswer } = useSelector(state => state.answers);
  console.log(selectedAnswer)
  const [ show, setShow ] = React.useState(false);
  const { name } = answer;
  const avatar = createAvatar(name);

  return (
    <div className='answers--container' onClick={() => dispatch(getAnswer(answer.id))}>
      <div className='answersCard'>
        <div className='answersCard__header'>
          <div className='answersCard__header--user'>
            {answer.imgUrl ? (
              <img src={answer.imgUrl} alt="user-img" />
            ): (<div className='avatar'>{avatar.toUpperCase()}</div>)}  
            <div>
              <h3>{answer.name}</h3>
              <p>{answer.days} ago</p>
            </div>
          </div>
          <Button className={"accept--btn"} text={"Mark as an Answer"} />
        </div>
        <div>
          {answer.comment}
        </div>
        <div className='answersCard--footer'>
          <Button className={"like--btn"} text={`Like`}/>
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