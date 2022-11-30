import React from 'react';
import './layout.css'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <div>Header</div>
      <div className='layout--main'>
        {children}
      </div>
    </div>
  )
}

export default Layout