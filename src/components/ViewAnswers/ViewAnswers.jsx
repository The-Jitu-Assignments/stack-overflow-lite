import React from 'react';
import './viewanswer.css'
import Button from '../Button/Button'
import dummyData from '../../data/posts.json';
import QuestionCard from '../Card/Questions/Question';

const ViewAnswers = ({ close }) => {
  const { posts } = dummyData;
  console.log(posts)
  return (
    <div className='viewAnswer--modal' onClick={close}>
      <div className='viewAnswer--header'>
        <h2>Answers</h2>
        <Button method={close} className={"closeBtn"} text={"x"} />
      </div>
      <div className='viewAnswer--body'>
        {posts.map((post, i) =>  (
          <QuestionCard key={i} post={post} />
        ))}
      </div>
    </div>                                                                                                                                                                            
  )
}

export default ViewAnswers