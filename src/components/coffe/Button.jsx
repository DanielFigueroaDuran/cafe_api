import React from 'react'

const Button = ({className, type, label, handleClick}) => {
  return (
    <button className={className} onClick={(handleClick)}>{label}</button>
  )
}

export default Button