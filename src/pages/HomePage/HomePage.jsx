import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions, setSelectedQuiz } from '../../features/question/quizSlice';
import './home.css';
import dummyData from '../../data/posts.json';
import QuestionCard from '../../components/Card/Questions/Question';
import { BsFilter } from 'react-icons/bs'
import Button from '../../components/Button/Button';
import AnswersCard from '../../components/Card/AnswersCard/AnswersCard';
import { getQuestion } from '../../features/question/quizSlice';
import { getLoggedInUser } from '../../features/user/userActions';

const HomePage = () => {
  const { selectedQuiz, questions } = useSelector(state => state.quiz);
  const { user } = useSelector(state => state.user);
  console.log(user)
  const { answers, question } = selectedQuiz || [];
  const dispatch = useDispatch();
  const [showFilterBtns, setShowFilterBtns] = React.useState(false);

  React.useEffect(() => {
    dispatch(fetchQuestions());
    dispatch(getLoggedInUser())
  }, []);

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
            {questions?.map((question) => {
              return (
                <QuestionCard key={question.id} question={question} selectQuiz={() => dispatch(getQuestion(question.id))} />
              )
            })}
          </div>
        </div>
        <div className='homepage--premium'>
          <h2>Answers</h2>
          <h3>{question?.question}</h3>
          {answers?.length > 0 ? (
            <>
              {answers?.map(answer => (
                <AnswersCard key={answer.id} answer={answer} />
              ))}
            </>
          ) : (selectedQuiz && <span>This question is not answered yet...</span>)}
        </div>
      </div>
    </div>
  )
}

export default HomePage;