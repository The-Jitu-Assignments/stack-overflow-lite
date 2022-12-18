import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Profile.css'
import dummyData from '../../data/posts.json';
import PersonalQuiz from '../../components/PersonalQuiz/PersonalQuiz';
import { fetchUserProfile } from '../../features/user/userActions';
import { createAvatar } from '../../helpers/avatar/CreateAvatar';

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { profile, user } = useSelector(state => state.user);
  const [currentData, setCurrentData] = useState('Recent Asked Quistions');
  const { posts } = dummyData;

  useEffect(() => {
    dispatch(fetchUserProfile(id))
  }, [id]);

  let avatar;

  if (profile.name !== undefined) {
    avatar = createAvatar(profile.name);
  }

  return (
    <div className='profile--page'>
      <div className='profile--page__left'>
        <div className='profile--image'>
          {profile.profileId ? (
            <img src={profile.imgUrl} alt="user--img" />
          ): (<div className='user--img__avatar'>{avatar}</div>)}
        </div>
        <div>{profile.name}</div>
        <div>{profile.email}</div>
        {user.id === profile.id && (
          <>
            {profile.profileId ? (
              <div className='profile--btn'>Edit</div>
            ) : (<div className='profile--btn'>Add Profile</div>)}
          </>
        )}
      </div>
      <div className='profile--page__right'>
        <div className='profile--right__top'>
          <div className="profile--item">
            <span>Name:</span>
             {profile.name}
          </div>
          <div className="profile--item">
            <span>Email: </span>
            {profile.email}
          </div>
          <div className="profile--item">
            <span>Phone:</span>
             {profile.phone || 'N/A'}
          </div>
          <div className="profile--item">
            <span>Location: </span>
            {profile.address || 'N/A'}
          </div>
          <div className="profile--item">
            <span>Github URL: </span>
            {profile.github || 'N/A'}
          </div>
          <div className="profile--item">
            <span>Number of Questions asked: </span>
            {profile.totalQuestionsAsked}
          </div>
          <div className="profile--item">
            <span>Answered Given: </span>
            {profile.totalAnswersGiven}
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