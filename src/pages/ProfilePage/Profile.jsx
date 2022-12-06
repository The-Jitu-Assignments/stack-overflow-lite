import React, { useState } from 'react';
import './Profile.css'
import dummyData from '../../data/posts.json';
import PersonalQuiz from '../../components/PersonalQuiz/PersonalQuiz';

const Profile = () => {
  const [currentData, setCurrentData] = useState('Recent Asked Quistions');
  const { posts } = dummyData;
  const img = posts.map((post) => post.image);
  return (
    <div className='profile--page'>
      <div className='profile--page__left'>
        <div className='profile--image'>
          <img src={img} alt="user--img" />
        </div>
        <div>John Katua</div>
        <div>johnkatua99@gmail.com</div>
      </div>
      <div className='profile--page__right'>
        <div className='profile--right__top'>
          <div className="profile--item">
            <span>Name:</span>
             John Katua
          </div>
          <div className="profile--item">
            <span>Email: </span>
            johnkatua99@gmail.com
          </div>
          <div className="profile--item">
            <span>Phone:</span>
             0795029709
          </div>
          <div className="profile--item">
            <span>Location: </span>
            Nyeri, Kenya
          </div>
          <div className="profile--item">
            <span>Number of Questions asked: </span>
            378
          </div>
          <div className="profile--item">
            <span>Answered Given: </span>
            3210
          </div>
        </div>
        <div className='profile--right__bottom'>
          <div className='profile--bottom__header'>
            <div className='profile--quizes__recent' onClick={() => setCurrentData('Recent Asked Questions')}>
              Recent Asked Questions
            </div>
            <div className='profile--quizes--mostAnswered' onClick={() => setCurrentData('Most Answered Questions')}>
              Most Answered Questions
            </div>
          </div>
          <div>
            {posts.map((post, i) => (
              <PersonalQuiz data={currentData} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;