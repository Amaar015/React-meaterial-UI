import React from 'react'
import {Timeline, TimelineItem,TimelineConnector,TimelineContent,TimelineDot,TimelineSeparator} from '@mui/lab'
import './timeline.css'
import { Typography } from '@mui/material'

const CustomTimeline = ({title,children,icon}) => {
  return (

    <Timeline className='timeline'>
    <TimelineItem className='timeline-firstitem'>
      <TimelineSeparator>
        <TimelineDot  className='timeline-dot-header'>
         {icon}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant='h5' className='timeline-header'>
          {title}
        </Typography>
      </TimelineContent>
    </TimelineItem>
    {children}
    {/* Remaining item */}
    {/* <TimelineItem>
       <CustomTimelineseparator/>
      <TimelineContent>Code</TimelineContent>
    </TimelineItem> */}
    
  </Timeline>
  )
}
export const CustomTimelineseparator =()=>(
<TimelineSeparator className='separator-padding'>
        <TimelineDot  className='timeline-dot'/>
        <TimelineConnector />
      </TimelineSeparator>
)

export default CustomTimeline
