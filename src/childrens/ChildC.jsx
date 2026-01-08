import React, { useContext } from 'react'
import { userContext } from '../hooks/contextapi/MainContext'

const ChildC = () => {
    const sachin = useContext(userContext)
  return (
    <div>
        <h1>  {sachin}</h1>
      
      
    </div>
  )
}

export default ChildC
