import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions } from '../../features/question/quizSlice';
import './home.css';
import QuestionCard from '../../components/Card/Questions/Question';
import { BsFilter } from 'react-icons/bs'
import Button from '../../components/Button/Button';
import { getQuestion } from '../../features/question/quizSlice';
import { getLoggedInUser } from '../../features/user/userActions';
import { fetchRecentAskedQuestions } from '../../features/question/quizActions';

const HomePage = () => {
  const { questions } = useSelector(state => state.quiz);
  const [btn, setBtn] = useState('all');
  const dispatch = useDispatch();
  const [showFilterBtns, setShowFilterBtns] = useState(false);

  const handleFilter = (text) => {
    setBtn(text)
  }

  useEffect(() => {
    if (btn === 'all') {
      dispatch(fetchQuestions())
    } else if (btn === 'recent') {
      dispatch(fetchRecentAskedQuestions());
    }
    dispatch(getLoggedInUser())
  }, [btn])

  // useEffect(() => {
  //   dispatch(fetchQuestions());
  // }, []);

  console.log(btn)

  return (
    <div className='homepage'>
      <div className='homepage--container'>
        <div className='homepage--all'>
          <div className='homepage--all__header'>
            <div className='homepage--all__filter'>
              <div className='homepage--search'>
                <input type="search" placeholder='Search a question' />
              </div>
              <div className='homepage--filter' onClick={() => setShowFilterBtns(!showFilterBtns)}>
                Filter
                <BsFilter />
              </div>
            </div>
            {showFilterBtns && (
            <div className='homepage--filter__buttons'>
              <Button text={"All"} className={"home--filter__btn"} method={() => handleFilter('all')} />
              <Button text={"Most Recent"} className={"home--filter__btn"} method={() => handleFilter('recent')} />
              <Button text={"Most Replies"} className={"home--filter__btn"} method={() => handleFilter('replies')} />
            </div>
            )}
          </div>
          <div className='homepage--questions'>
            {questions?.map((post) => {
              return (
                <>  
                  <QuestionCard key={post.id} post={post} selectQuiz={() => dispatch(getQuestion(post.id))} />
                </>
              )
            })}

          </div>    
        </div>
      </div>
    </div>
  )
}

export default HomePage;