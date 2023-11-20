import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, withRouter} from 'react-router-dom'
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import { Nav } from 'react-bootstrap';
import data from '../../Pages/Data/data';
import Buttons from '../Button/Buttons';
import { Telegram } from '@mui/icons-material';
import './header.css'

const Header = (props) => {
  const pathName=props?.location?.pathname;
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary header" >
    
    <Nav.Link as={NavLink} to='/' className='header-navlink'>
    <Navbar.Brand className='header-home'>
         <HouseRoundedIcon/>
    </Navbar.Brand>
    </Nav.Link>

     <Navbar.Toggle/>

     <Navbar.Collapse>
      <Nav className='header-left'>
        {/* Resume link */}
        <Nav.Link as={NavLink} to='/resume' className={pathName=='/resume'? 'header-link-active' :'header-link' }>
          Resume
        </Nav.Link>

        {/* Portfolio link */}
        <Nav.Link as={NavLink} to='/portfolio' className={pathName=='/portfolio'? 'header-link-active' :'header-link' }>
          Portfolio
        </Nav.Link>

        {/* Blog link */}
        <Nav.Link as={NavLink} to='/blog' className={pathName=='/blog'? 'header-link-active' :'header-link' }>
          Blog
        </Nav.Link>

      </Nav>
     </Navbar.Collapse>

    <div className='header-right'>
      {Object.keys(data.social).map((key)=>(
        <a href={data.social[key].link} target='_blank'>
          {data.social[key].icon}
        </a>
      ))}
      <Buttons text={'Hire Me'} icon={<Telegram/>}></Buttons>
    </div>

  </Navbar>

  )
}

export default  Header
