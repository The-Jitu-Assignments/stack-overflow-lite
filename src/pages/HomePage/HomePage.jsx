import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions, setSelectedQuiz } from '../../features/question/quizSlice';
import './home.css';
import dummyData from '../../data/posts.json';
import QuestionCard from '../../components/Card/Questions/Question';
import { BsFilter } from 'react-icons/bs'
import Button from '../../components/Button/Button';
import AnswersCard from '../../components/Card/AnswersCard/AnswersCard';
import { AvatorGenerator } from '../../helpers/AvatorGenerator';
import { getQuestion } from '../../features/question/quizSlice';
import Skeleton from 'react-loading-skeleton';

const HomePage = () => {
  const { selectedQuiz, questions } = useSelector(state => state.quiz);
  const { answers, question } = selectedQuiz;
  console.log(selectedQuiz)
  const dispatch = useDispatch();
  const [showFilterBtns, setShowFilterBtns] = React.useState(false);
  const { posts, images } = dummyData;

  const questionsData = questions.map((qn) => {
    const { imgUrl, ...rest } = qn;
    const randomImg = AvatorGenerator(images)
    return {
      ...rest,
      imgUrl: imgUrl ? imgUrl : randomImg?.avatar
    }
  });

  React.useEffect(() => {
    dispatch(fetchQuestions())
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
            {questionsData?.map((qn) => {
              return (
                <QuestionCard key={qn.id} post={qn} selectQuiz={() => dispatch(getQuestion(qn.id))} />
              )
            })}
          </div>
        </div>
        <div className='homepage--premium'>
          <h2>Answers</h2>
          <h3>{question.question}</h3>
          {answers.map(answer => (
            <AnswersCard key={answer.id} answer={answer} />
          ))}
          {/* Coming Soon */}
        </div>
      </div>
    </div>
  )
}

export default HomePage;