import React from 'react';
import './price.css'

const Pricing = () => {
  return (
    <div className='pricing'>
      <div className='pricing--item'>
          <div className='pricing--item__front'>Bronze</div>
          <div className='pricing--item__back'>Free</div>
      </div>
      <div className='pricing--item'>
        <div className='pricing--item__front'>Silver</div>
          <div className='pricing--item__back'>Ksh. 200</div>
      </div>
      <div className='pricing--item'>
        <div className='pricing--item__front'>Gold</div>
          <div className='pricing--item__back'>Ksh. 500</div>
      </div>
    </div>
  )
}

export default Pricing;