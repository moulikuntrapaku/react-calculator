import React from 'react'
import './Button.css'

export const Button = ({label, onClick}) => {
  return (
    <button onClick={onClick}>{label}</button>
  )
}
