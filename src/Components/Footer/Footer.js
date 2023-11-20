import React from 'react'
import './footer.css'
import { Typography } from '@mui/material'
import data from '../../Pages/Data/data'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-left'>
        <Typography className='footer-name'>{data.name}</Typography>

      </div>
       <div className='footer-right'>
        <Typography className='footer-copyright'>
          Designed and Developed by {" "}
          <a href='/' target='_blank'> Amaar Raza</a>
          <br/>
          Clone idea from {" "}
          <a href='/' target='_blank'>Travonline</a>
        </Typography>
       </div>
    </div>
  )
}

export default Footer
