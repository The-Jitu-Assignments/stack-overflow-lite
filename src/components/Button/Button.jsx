import React from 'react';

const Button = ({ method, className, text }) => {
  return (
    <div className={className} onClick={method}>
      {text}
    </div>
  )
}

export default Button;