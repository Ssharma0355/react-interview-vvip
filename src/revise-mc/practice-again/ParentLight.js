import React from 'react'
import ChildLight from './ChildLight'

const ParentLight = () => {
    const TrafficConfig =[
        {
            color:"red",
            duration:3000,
        },
        {
            color:"yellow",
            duration:1000,
        },
        {
            color:"green",
            duration:5000,
        }
    ]
  return (
    <div>
        <h1>Traffic Light</h1>
        <ChildLight config={TrafficConfig} />
      
    </div>
  )
}

export default ParentLight
