import React from 'react'
import './home.css';
import dummyData from '../../data/posts.json';
import QuestionCard from '../../components/Card/Questions/Question';
import { BsFilter } from 'react-icons/bs'

const HomePage = () => {
  const { posts } = dummyData;
  return (
    <div className='homepage'>
      <div className='homepage--container'>
        <div className='homepage--all'>
          <div className='homepage--all__header'>
            <div className='homepage--search'>
              <input type="search" placeholder='Search a question' />
            </div>
            <div className='homepage--filter'>
              Filter
              <BsFilter />
            </div>
            <div className='homepage--filter__buttons'>
              <div>Item1</div>
              <div>Item2</div>
              <div>3S</div>
            </div>
          </div>
          <div className='homepage--questions'>
            {posts.map((post, i) => (
              <QuestionCard key={i} post={post} />
            ))}
          </div>
        </div>
        <div className='homepage--premium'>
          Suggested for you
        </div>
      </div>
    </div>
  )
}

export default HomePage;