import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './home.css';
import QuestionCard from '../../components/Card/Questions/Question';
import { BsFilter } from 'react-icons/bs'
import Button from '../../components/Button/Button';
import { getQuestion } from '../../features/question/quizSlice';
import { fetchMostAnsweredQuestions, fetchRecentAskedQuestions, searchQuestion, fetchQuestions } from '../../features/question/quizActions';
import { getLoggedInUser } from '../../features/user/userActions';

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [searchValue, setSearchValue] = useState('');
  const { questions, total } = useSelector(state => state.quiz);
  const [btn, setBtn] = useState('all');
  const dispatch = useDispatch();
  const [showFilterBtns, setShowFilterBtns] = useState(false);

  const totalPages = Math.ceil(total / limit)

  const handleFilter = (text) => {
    setBtn(text)
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
      dispatch(fetchQuestions({ pageNumber: page + 1, pageSize: limit }))
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      dispatch(fetchQuestions({ pageNumber: page - 1, pageSize: limit }))
    }
  }

  useEffect(() => {
    if (btn === 'all') {
      dispatch(fetchQuestions({ pageNumber: 1, pageSize: 4 }))
    } else if (btn === 'recent') {
      dispatch(fetchRecentAskedQuestions());
    } else if (btn === 'replies') {
      dispatch(fetchMostAnsweredQuestions());
    } else {
      dispatch(searchQuestion(searchValue))
    }
    dispatch(getLoggedInUser())
  }, [btn, searchValue]);

  return (
    <div className='homepage'>
      <div className='homepage--container'>
        <div className='homepage--all'>
          <div className='homepage--all__header'>
            <div className='homepage--all__filter'>
              <div className='homepage--search'>
                <input type="search" placeholder='Search a question' name='searchValue' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                <Button text={"search"} className={"home--filter__btn"} method={() => dispatch(searchQuestion(searchValue))} />
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
          {btn === 'all' && (
          <div className='home--pagination'>
            <button className='like--btn' onClick={handlePrevPage} disabled={page === 1}>Next</button>
            <span>{page}</span>
            Out of
            <span>{totalPages}</span>
            <button className='like--btn' onClick={handleNextPage} disabled={page === totalPages}>Next</button>
          </div>  
          )} 
        </div>
      </div>
    </div>
  )
}

export default HomePage;