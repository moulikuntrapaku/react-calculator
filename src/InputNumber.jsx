import React from 'react'
import './InputNumber.css'

export const InputNumber = ({ value, placeholder, onChange }) => {
  return (
    <input className='input' value={value} type="text" placeholder={placeholder} onChange={onChange} />
  )
}
