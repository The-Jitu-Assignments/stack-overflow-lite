import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedQuiz } from '../../features/question/quizSlice';
import './home.css';
import dummyData from '../../data/posts.json';
import QuestionCard from '../../components/Card/Questions/Question';
import { BsFilter } from 'react-icons/bs'
import Button from '../../components/Button/Button';
import AnswersCard from '../../components/Card/AnswersCard/AnswersCard';

const HomePage = () => {
  const { selectedQuiz } = useSelector(state => state.quiz)
  console.log(selectedQuiz?.question?.answers)
  const dispatch = useDispatch();
  const [showFilterBtns, setShowFilterBtns] = React.useState(false);
  const { posts } = dummyData;
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
              <Button text={"Most Recent"} className={"home--filter__btn"} />
              <Button text={"Most Replies"} className={"home--filter__btn"} />
            </div>
            )}
          </div>
          <div className='homepage--questions'>
            {posts.map((post, i) => (
              <QuestionCard key={i} post={post} selectQuiz={() => dispatch(setSelectedQuiz(post))} />
            ))}
          </div>
        </div>
        <div className='homepage--premium'>
          <h2>Answers</h2>
          {selectedQuiz?.question?.answers.map((answer) => (
            <AnswersCard post={selectedQuiz} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage;