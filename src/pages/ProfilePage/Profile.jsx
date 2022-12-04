import React from 'react';
import './Profile.css'
import dummyData from '../../data/posts.json';

const Profile = () => {
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
        </div>
        <div className='profile--right__bottom'>
          <div className='profile--bottom__header'>
            <div className='profile--quizes__recent'>
              Recent Asked Questions
            </div>
            <div className='profile--quizes--mostAnswered'>
              Most Answered Questions
            </div>
          </div>
          <div>
            Body
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;