import React from 'react'
import './home.css';
import dummyData from '../../data/posts.json';
import QuestionCard from '../../components/Card/Questions/Question';
import { BsFilter } from 'react-icons/bs'
import Button from '../../components/Button/Button';

const HomePage = () => {
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
              <QuestionCard key={i} post={post} />
            ))}
          </div>
        </div>
        <div className='homepage--premium'>
          Answers
        </div>
      </div>
    </div>
  )
}

export default HomePage;