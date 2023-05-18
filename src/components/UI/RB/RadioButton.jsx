import React from 'react'
import '../../../styles/app.css'
import { useState } from 'react';
import { blue } from '@mui/material/colors';

const RadioButton = ({ name, id, value, onChange, checked, text, color='blue'}) => {


  return (
    <label htmlFor={id} className="radio-label">
      <input
        className="radio-input"
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      { color == 'green'
      ?
      <span className="custom-radio" />
      : color == 'red'?
      <span className="custom-radio1"/>
      :
      <span className="custom-radio2"/>
      }
      {text}
    </label>
  )
}

export default RadioButton