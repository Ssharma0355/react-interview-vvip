import React, { useEffect, useState } from 'react'

const TraficLight = ({config=[]}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(()=>{
        if(!config.length) return;

        const timer = setTimeout(()=>{
            setActiveIndex((prev)=>(prev+1) % config.length)
        },config[activeIndex].duration)

        return () => clearTimeout(timer)
    },[activeIndex, config])
  return (
    <div style={
        {
            backgroundColor:"grey",
            height:"auto",
            width:"200px",
            border:"12px",
            padding:"10px"
        }
    }>
        {config.map((light, index)=>(
            <div key={index} 
            style={{
                height:"50px",
                margin:"9px",
                width:"50px",
                borderRadius:"50%",
                backgroundColor: index === activeIndex ? light.color : "#555"
            }}
            >

            </div>
        ))}
      
    </div>
  )
}

export default TraficLight
