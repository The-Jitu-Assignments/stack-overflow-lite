import React from 'react';
import './addprofile.css'

const AddProfile = () => {
  return (
    <div className='add--profile'>
      <h3>Add Profile</h3>
      <hr />
      <div className='add--profile__details'>
        <div className="add--profile__item">
          <label>Phone</label>
          <input type={"text"} placeholder='Phone Number' />
        </div>
        <div className="add--profile__item">
          <label>Phone</label>
          <input type={"text"} placeholder='Phone Number' />
        </div>
        <div className="add--profile__item">
          <label>Phone</label>
          <input type={"text"} placeholder='Phone Number' />
        </div>
        <div className="add--profile__item">
          <label>Phone</label>
          <input type={"text"} placeholder='something new' />
        </div>
      </div>
    </div>
  )
}

export default AddProfile;