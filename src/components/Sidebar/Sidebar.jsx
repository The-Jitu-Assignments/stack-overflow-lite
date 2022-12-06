import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillHome,  } from 'react-icons/ai';
import { GrLanguage } from 'react-icons/gr';
import Button from '../Button/Button';
import './sidebar.css';
import { RxDoubleArrowLeft } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/user/userSlice.js'

const Sidebar = ({ close }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [showPopUp, setShowPopUp] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div className='sidebar--container' onClick={(e) => e.stopPropagation()}>
      <div className='sidebar--header'>
        <Button method={close} className={"closeBtn"} text={"x"} />
      </div>
      <div className='sidebar--content'>
        <div className="sidebar--content__item" onClick={() => {navigate('/'); close()}}>
          <AiFillHome />
          Home
        </div>
        <div className="sidebar--content__item" onClick={() => {navigate('/about-us'); close()}}>
          <GrLanguage />
          About Us
        </div>
      </div>
      <div className="sidebar--footer">
        {user ? <h3>Welcome Back</h3> : <h3>Join us</h3>}
        {user ? (
          <>
            <div className="sidebar--footer__user" onClick={() => setShowPopUp(!showPopUp)}>
              Johnkatua99@gmail.com
              <RxDoubleArrowLeft />
            </div>
            {showPopUp && (
              <div className="sidebar--popup">
                <div className="sidebar--popup__item" onClick={() => { navigate('/profile'); close()}}>Profile</div>
                <div className="sidebar--popup__item" onClick={() => dispatch(logout())}>Logout</div>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="sidebar--footer__item" onClick={() => {navigate('/login'); close()}}>
              Login
            </div>
            <div className="sidebar--footer__item" onClick={() => {navigate('/register'); close()}}>
              Signup
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Sidebar