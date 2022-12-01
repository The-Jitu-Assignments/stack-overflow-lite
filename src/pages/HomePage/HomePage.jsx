import React from 'react'
import './home.css';

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='homepage--container'>
        <div className='homepage--all'>
          All Questions
        </div>
        <div className='homepage--premium'>
          Suggested for you
        </div>
      </div>
    </div>
  )
}

export default HomePage;