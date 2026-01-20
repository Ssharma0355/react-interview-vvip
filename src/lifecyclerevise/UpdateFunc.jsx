import React, { useEffect } from 'react'

const UpdateFunc = ({number}) => {
    useEffect(()=>{
        console.log("Mounting in fN comp ")
        return()=>{
            console.log("Component removed")
        }
    },[number])
  return (
    <div>
        <h1>{number}</h1>
    </div>
  )
}

export default UpdateFunc
