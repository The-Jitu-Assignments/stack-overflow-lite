import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Profile.css'
import { fetchUserProfile } from '../../features/user/userActions';
import { createAvatar } from '../../helpers/avatar/CreateAvatar';
import { getMyQuestions } from '../../features/question/quizActions';
import QuestionCard from '../../components/Card/Questions/Question';


const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.user);
  const { myQuestions } = useSelector(state => state.quiz);

  useEffect(() => {
    dispatch(fetchUserProfile(id));
    dispatch(getMyQuestions(id))
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
            Questions
          </div>
          <div className='profile--questions'>
            {myQuestions.map((post) => (
              <QuestionCard key={post.id} post={post} selectQuiz={() => dispatch(getQuestion(post.id))} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;