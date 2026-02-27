import React, { useEffect, useState } from 'react'

const ChildLight = ({config =[]}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(()=>{
        if(!config.length) return;
        const timer = setTimeout(()=>{
            setActiveIndex((prev)=>(prev+1) % config.length);
        },config[activeIndex].duration)

        return ()=> clearTimeout(timer);

    },[activeIndex, config])
  return (
    <div style={
        {
            backgroundColor:"grey",
            height:"auto",
            width:"200px",
            padding:"12px",
            border:"1px solid black",
            borderRadius:"12px"
        }
    }>
        {config.map((light, index)=>(
            <div key={index} 
            style={
                {
                    borderRadius:"50%",
                    height:"50px",
                    width:"50px",
                    margin:"12px",
                    backgroundColor: index === activeIndex ? light.color : "#555"

                }
            }
            >

            </div>
        ))}

      
    </div>
  )
}

export default ChildLight
