import React, { useState } from 'react';
import './portfolio.css';
import { CardActionArea, CardContent, CardMedia, Grid, Grow, Tab, Tabs, Typography,Card, Dialog, DialogTitle, DialogContent, Button, DialogActions } from '@mui/material';
import data from '../Data/data';

const Portfolio = () => {
   const [tabValue,settabValue]=useState('All');
   const [projectDialog, setprojectDialog]=useState(false);
   

  return (
  
      <Grid container className='section pb_45 pt_45'>
        {/* title */}
         <Grid item className='section-title mb_30' >
            <span></span>
            <Typography variant='h6' className='section-title-heading'>Portfolio</Typography>
         </Grid>
          {/* Tabs */}
          <Grid item xs={12}>
            <Tabs
             value={tabValue}
             indicatorColor='white'
             className='custom-tabs'
             onChange={(event, newValue)=>settabValue(newValue)}>
                     <Tab label='All' value='All' className={tabValue=='All'? 'customtabs-item active':'customtabs-item'}/>
                     {[...new Set(data.projects.map((item)=>item.tag))].map(
                         (tag)=>(
                        <Tab 
                         label={tag}
                         value={tag}
                         className={tabValue=='All'? 'customtabs-item active':'customtabs-item'}
                        />
                        ) 
                     )}
             </Tabs>

             
        <Grid item xs={12}>
            
            <Grid item xs={12}>
               <Grid container spacing={3}>
                  {data.projects.map((project)=>(
                     <>
                      {tabValue==project.tag || tabValue=='All'?(
                             <Grid item xs={12} sm={6} md={4}>
                              <Grow in timeout={1000}>
                                 <Card className='customCard' onClick={()=>setprojectDialog(project)}>
                                    <CardActionArea>
                                       <img className='customCard-image' src={project.Image} alt={project.title}/> 
                                       <CardContent>
                                          <Typography variant='h6' className='customCard-title'> {project.title}</Typography>
                                          <Typography variant='body2' className='custonCard-description'>{project.description}</Typography>
                                       </CardContent>
                                    </CardActionArea>
                                 </Card>
                              </Grow>
                             </Grid>    
                      ):null}
                     </>
                  ))}
               </Grid>
            </Grid>
        </Grid>
                   
          </Grid>
                  {/* Project dialog */}

      <Dialog
      open={projectDialog}
      onClose={()=>setprojectDialog(false)}
      className='projectDialog'
    >
      <DialogTitle onClose={()=>setprojectDialog(false)}>
        {projectDialog.title}
      </DialogTitle>
      <img src={projectDialog.Image} alt='Title' className='projectDialog-image'/>
      <DialogContent>
         <Typography className='projectDialog-description'> {projectDialog.description}</Typography>
         
      </DialogContent>
      <DialogActions className='projectDialog-actions'>
         {projectDialog?.links?.map((link)=>(
            <a href={link.link} target='_blank' className='projectDialog-icons'> 
            {link.icon}
            </a>
         ))}

      </DialogActions>
    </Dialog>
      </Grid>

  )
}

export default Portfolio
