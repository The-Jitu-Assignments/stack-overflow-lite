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
          {/* <h2>All Questions</h2> */}
          <div className='homepage--all__header'>
            <div>
              <input type="search" placeholder='Search a question' />
            </div>
            <div>
              Filter
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