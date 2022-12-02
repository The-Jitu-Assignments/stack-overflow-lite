import React from 'react';
import './user.css'

const User = ({ close }) => {
  return (
    <div className='user--modal' onClick={close}>User</div>
  )
}

export default User