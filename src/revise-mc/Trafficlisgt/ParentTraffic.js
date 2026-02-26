import React from 'react'
import TraficLight from './TraficLight'

const ParentTraffic = () => {
    const TrafficCongif=[
        {
            color:"red",
            duration:2000
        },
        {
            color:"yellow",
            duration:1000,
        },
        {
            color:"green",
            duration:4000,
        },
        {
            color:"black",
            duration:2000,
        }
    ]
  return (
    <div>
        <h1>Traffic Light</h1>
        <TraficLight config={TrafficCongif} />
      
    </div>
  )
}

export default ParentTraffic
