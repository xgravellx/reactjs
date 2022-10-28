import React from 'react'

export const Button = (props) => {
  return <button {...props}>{props.text}</button>
}