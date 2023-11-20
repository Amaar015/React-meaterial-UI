import React from 'react'
import './button.css';
import { Button } from '@mui/material';

const Buttons = ({text,icon}) => {
  return (
    <Button className='custom-btn'
    endIcon={icon ? <div className='btn-icon-container'>{icon}</div>:null} >
        
        <span className='btn-text'>{text}</span>
    </Button>
  )
}

export default Buttons
