import { Grid, Icon, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import data from '../Data/data'
import './resume.css';
import CustomTimeline, { CustomTimelineseparator } from '../../Components/Timeline/CustomTimeline'
import WorkIcon from '@mui/icons-material/Work';
import { TimelineContent, TimelineDot, TimelineItem } from '@mui/lab';
import SchoolIcon from '@mui/icons-material/School';
import Buttons from '../../Components/Button/Buttons';
const Resume = () => {
  return (
    <>
    <Grid container className="section">
      <Grid item className='section-title top_30' >
        <span></span>
        <Typography variant='h6' className='section-title-heading'>About Me</Typography>
      </Grid>
      <Grid item xs={12} >
        <Typography className='aboutme-text top_30'>{data.about}</Typography>
      </Grid>
    </Grid>

    {/* Education and Experiences */}
    <Grid container className='section'>
    <Grid item className='section-title top_30' >
        <span></span>
        <Typography variant='h6' className='section-title-heading'>Resume</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container className='resume-timeline'>
          {/* Experience */}
          <Grid item sm={12} md={6} marginTop={4}>
            <CustomTimeline title='Work Experience' icon={<WorkIcon/>}>
              {data.experience.map((experience)=>(
                <TimelineItem>
                  <CustomTimelineseparator/>
                  <TimelineContent>
                    <Typography className='timeline-title'>
                      {experience.title}
                    </Typography>
                    <Typography variant='caption' className='timeline-date'>{experience.date}</Typography>
                   <Typography variant='body2' className='timeline-description'>
                    {experience.description}
                   </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </CustomTimeline>
          </Grid>
           {/* Education */}
           <Grid item sm={12} md={6} marginTop={4}>
            <CustomTimeline title='Education' icon={<SchoolIcon/>}>
              {data.education.map((education)=>(
                <TimelineItem>
                  <CustomTimelineseparator/>
                  <TimelineContent>
                    <Typography className='timeline-title'>
                      {education.title}
                    </Typography>
                    <Typography variant='caption' className='timeline-date'>{education.date}</Typography>
                   <Typography variant='body2' className='timeline-description'>
                    {education.description}
                   </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </CustomTimeline>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

       {/* Services */}
       <Grid container className='section pb_45' >
       <Grid item className='section-title mb_30' >
        <span></span>
        <Typography variant='h6' className='section-title-heading'>Services</Typography>
      </Grid>
        
        <Grid item xs={12}>
          <Grid container spacing={3} justifyContent='space-around'> 
            {data.services.map((service)=>(
             <Grid item xs={12} sm={6} md={3}>
                <div className='service'>
                  <Typography className='service-icon'>{service.icon}</Typography> 
                  <Typography className='service-title' variant='h6'> {service.title}</Typography>
                  <Typography className='service-description' variant='body2'>{service.description}</Typography>
                </div>
             </Grid>  
            ))}
          </Grid>
        </Grid>

      </Grid>
         {/* skills */}
    <Grid container 
      spacing={3}
      justifyContent='space-between'
    className='section pb_45 p_50'>
      {data.skills.map((skill)=>(
           <Grid item xs={12} sm={6} md={3}>
             <Paper elevation={0} className='skill'>
              <Typography variant='h6' className='skill-title'>{skill.title}</Typography>
              {skill.description.map((element)=>(
                <Typography variant='body2' className='skill-description'>
                  <TimelineDot variant={'outlined'} className='timeline-dot'/>
                  {element}
                </Typography>
              ))}
             </Paper>

           </Grid>
      ))}
        
      </Grid>
         {/* Contact */}
    <Grid container spacing={5} className='section pt_45 pb_45'>
            <Grid item xs={12} lg={7}>
              <Grid container>
                <Grid item className='section-title mb_30'>
                  <span></span>
                  <h6 className='section-title-heading'>Contact Form</h6>
                </Grid>
         <Grid item xs={12}>
           <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                  <TextField fullWidth name='name' label='Name' variant='standard'/>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <TextField fullWidth name='email' label='Email' variant='standard'/>
              </Grid>
              <Grid item xs={12}>
                  <TextField fullWidth name='message' label='Message' multiline rows={4} variant='standard'/>
              </Grid>
              <Grid item xs={12}>
               <Buttons text='Submit'/>
              </Grid>
           </Grid>
         </Grid>
              </Grid>
            </Grid>
            {/* Contact Information */}
                   <Grid item xs={12} lg={5}>
                      <Grid container>
                          <Grid item className='section-title mb_30'>
                              <span></span>
                            <Typography className='section-title-heading'>Contact Information</Typography>
                          </Grid>

                         <Grid item xs={12}>
                          <Grid container spacing={2}>
                              <Grid item xs={12}> 
                                 <Typography className='contactinfo-item'>
                                    <spa>Skype: </spa> {data.name}
                                 </Typography>
                              </Grid>
                              <Grid item xs={12}> 
                                 <Typography className='contactinfo-item'>
                                    <spa>Job: </spa> {data.title}
                                 </Typography>
                              </Grid>
                             <Grid item xs={12}> 
                                 <Typography className='contactinfo-item'>
                                    <spa>Address: </spa> {data.address}
                                 </Typography>
                              </Grid>
                              
                              <Grid item xs={12}> 
                                 <Typography className='contactinfo-item'>
                                    <spa>Phone: </spa> {data.phone}
                                 </Typography>
                              </Grid>
                              <Grid item xs={12}> 
                                 <Typography className='contactinfo-item'>
                                    <spa>Email: </spa> {data.email}
                                 </Typography>
                              </Grid>
                        
                          </Grid>
                        
                        
                        
                         </Grid>
  
                         <Grid item xs={12}>
                       <Grid container className='contactinfo-socialContainer'>
                        {Object.keys(data.social).map((key)=>(
                          <Grid item className='contactinfo-social'>
                            <a href={data.social[key].link}>
                              {data.social[key].icon}
                            </a>
                          </Grid>
                        ))}
                       </Grid>
                    </Grid>

                      </Grid>
                    
                    
                       
                   </Grid>

             

      </Grid>
    </>  
  

  )
}

export default Resume
