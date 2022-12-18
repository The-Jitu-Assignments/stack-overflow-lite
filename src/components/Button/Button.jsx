import React from 'react';

const Button = ({ method, className, text, title }) => {
  return (
    <div className={className} onClick={method} title={title}>
      {text}
    </div>
  )
}

export default Button;