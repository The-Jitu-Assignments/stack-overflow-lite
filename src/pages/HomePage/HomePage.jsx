import React from 'react'
import './home.css';
import dummyData from '../../data/posts.json';
import QuestionCard from '../../components/Card/Questions/Question';

const HomePage = () => {
  const { posts } = dummyData;
  return (
    <div className='homepage'>
      <div className='homepage--container'>
        <div className='homepage--all'>
          {/* <h2>All Questions</h2> */}
          <div className='homepage--all__header'>
            Header
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