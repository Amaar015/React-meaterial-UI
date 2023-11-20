import { Typography,Button } from '@mui/material'
import React from 'react'
import './profile.css'
import image from '../../assets/images/images.jpg'
import CustomTimeline, { CustomTimelineseparator } from '../Timeline/CustomTimeline'
import data from '../../Pages/Data/data'
import { TimelineContent, TimelineItem } from '@mui/lab'
import Buttons from '../Button/Buttons'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
const CustomTimelineItem=({title,text,link})=>(
  <TimelineItem className='timeline'>
    <CustomTimelineseparator/>
    <TimelineContent  className='timeline-content'>
      {link? (
        <Typography className='timelineItem-text'>
          <span>{title}:</span> <a href={link} target='_blank'>{text}</a>
        </Typography>
      ):(<Typography className='timelineItem-text' >
        <span>{title}:</span>
        {text}
      </Typography>)}
    </TimelineContent>
  </TimelineItem>
)


const Profile = () => {
  return (
   <div className='profile container-shadow'>
    <div className='profile-name'>
      <Typography className='name'>{data.name}</Typography>
      <Typography className='title'>{data.title}</Typography>
    </div>
    
    <figure className="profile-image">
           <img src={image} alt=''/>
    </figure>
    <div className='information'>
      <CustomTimeline icon={data.icons}>
        <CustomTimelineItem  title='Name ' text={data.name}/>
        <CustomTimelineItem  title='Date of Birth ' text={data.birthday}/>
        <CustomTimelineItem  title='email ' text={data.email}/>
        <CustomTimelineItem  title='Address ' text={data.address}/>
        <CustomTimelineItem  title='Phone no ' text={data.phone}/>
        {Object.keys(data.social).map((key)=>(
          <CustomTimelineItem title={key} text={data.social[key].text} link={data.social[key].text}/>
        ))}
      </CustomTimeline>
           
      <br/>
       <Buttons text='Download CV' icon={<DownloadOutlinedIcon/>}/>
     </div>
   </div>
  )
}

export default Profile
