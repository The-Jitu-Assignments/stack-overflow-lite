import React from 'react';
import './Profile.css'

const Profile = () => {
  return (
    <div className='profile--page'>
      <div className='profile--page__left'>
        <div className='profile--image'>Image</div>
        <div>Name</div>
        <div>Email</div>
      </div>
      <div className='profile--page__right'>Other Details</div>
      {/* <div className='profile--page__intro'>
        <img src='/assets/img2.jpg' alt='logo' />
      </div>
      <div className='profile--page__content'>
        Content
      </div> */}
    </div>
  )
}

export default Profile;