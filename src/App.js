import { Container, Grid } from '@mui/material'
import React from 'react'
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Portfolio from './Pages/portfolio/Portfolio';
import Resume from './Pages/Resume/Resume'
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
const App = () => {
  return (
    <Container>
      <Grid container gap={3}>
        <Grid item xs={12} sm={12} lg={3} md={4} >
          <Profile/>
        </Grid>
        <Grid item xs  >
         
         <BrowserRouter>
         <Header/>
         <div className='main-container'>
           
         <Routes>
          <Route path="/resume" exact element={<Resume/>} />
        <Route path="/portfolio"  element={<Portfolio/>} />
      </Routes>

         </div>
    </BrowserRouter>
         <Footer/>

        </Grid>
      </Grid>
    </Container>
  )
}

export default App
