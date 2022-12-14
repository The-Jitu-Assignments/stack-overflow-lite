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

const HomePage = () => {
  const { selectedQuiz, questions } = useSelector(state => state.quiz)
  console.log(selectedQuiz?.question?.answers);
  console.log(questions)
  const dispatch = useDispatch();
  const [showFilterBtns, setShowFilterBtns] = React.useState(false);
  const { posts, images } = dummyData;

  // console.log(images)

  const questionsData = questions.map((qn) => {
    const { imgUrl, ...rest } = qn;
    const randomImg = AvatorGenerator(images)
    return {
      ...rest,
      imgUrl: imgUrl ? imgUrl : randomImg.avatar
    }
  });

  console.log(questionsData)

  // let randomAvatar = return ima

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
                <QuestionCard key={qn.id} post={qn} selectQuiz={() => dispatch(setSelectedQuiz(qn))} />
              )
            })}
          </div>
        </div>
        <div className='homepage--premium'>
          <h2>Answers</h2>
          Coming Soon
          {/* {selectedQuiz?.question?.answers.map((answer) => (
            <AnswersCard post={selectedQuiz} answer={answer} />
          ))} */}
        </div>
      </div>
    </div>
  )
}

export default HomePage;