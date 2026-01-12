import React, { useContext } from 'react'
import { userContext } from '../hooks/contextapi/MainContext'

const ChildA = () => {
    const value = useContext(userContext)
  return (
    <div>
        <h1>{value}</h1>
    </div>
  )
}

export default ChildA
