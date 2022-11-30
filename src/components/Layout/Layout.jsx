import React from 'react';
import Header from '../Header/Header';
import './layout.css'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <div>
        <Header />
      </div>
      <div className='layout--main'>
        {children}
      </div>
    </div>
  )
}

export default Layout