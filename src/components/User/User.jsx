import React from 'react';
import './user.css'

const User = ({ close }) => {
  return (
    <div className='user--modal' onClick={close}>
      <div className='user--modal__header'>Header</div>
      <div className='user--modal__content'>Body</div>
    </div>
  )
}

export default User