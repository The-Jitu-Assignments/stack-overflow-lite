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
          <div className="profile--item">Item1</div>
          <div className="profile--item">Item2</div>
          <div className="profile--item">Item3</div>
          <div className="profile--item">Item4</div>
          <div className="profile--item">Item5</div>
          <div className="profile--item">Item6</div>
        </div>
        <div className='profile--right__bottom'>
          Bottom
        </div>
      </div>
    </div>
  )
}

export default Profile;