import React from 'react';

const Input = ({ type, placeholder, handleChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={(event) => handleChange(event, type)}
    />
  )
}

export default Input;