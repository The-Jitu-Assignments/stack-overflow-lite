import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './home.css';
import QuestionCard from '../../components/Card/Questions/Question';
import { BsFilter } from 'react-icons/bs'
import Button from '../../components/Button/Button';
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
      if (btn === 'all') {
        dispatch(fetchQuestions({ pageNumber: page + 1, pageSize: limit }))
      } else if (btn === 'recent') {
        dispatch(fetchRecentAskedQuestions({ pageNumber: page + 1, pageSize: limit }));
      }
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      if (btn === 'all') {
        dispatch(fetchQuestions({ pageNumber: page - 1, pageSize: limit }))
      } else if (btn === 'recent') {
        dispatch(fetchRecentAskedQuestions({ pageNumber: page - 1, pageSize: limit }));
      }
    }
  }

  useEffect(() => {
    if (btn === 'all') {
      dispatch(fetchQuestions({ pageNumber: 1, pageSize: 4 }))
    } else if (btn === 'recent') {
      dispatch(fetchRecentAskedQuestions({ pageNumber: 1 ,pageSize: 4}));
    } else if (btn === 'replies') {
      dispatch(fetchMostAnsweredQuestions({pageNumber: 1,pageSize: 4} ));
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
            {questions?.length > 0 ? (
              <> 
              {questions?.map((post) => {
                return (
                  <>  
                    <QuestionCard key={post.id} post={post} />
                  </>
                )
              })}
              </>
            ) : (<h2>No Data</h2>)}
          </div>
          {btn !== 'replies' && questions?.length > 0 && (
          <div className='home--pagination'>
            <button className='like--btn' onClick={handlePrevPage} disabled={page === 1}>Prev</button>
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