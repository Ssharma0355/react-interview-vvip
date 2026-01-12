import React, { useContext } from 'react'
import { userContext } from '../hooks/contextapi/MainContext'

const ChildB = () => {
const valueOfContext = useContext(userContext)

  return (
    <div>
        <h1>Who is codder?</h1>
        <p>{valueOfContext}</p>
    </div>
  )
}

export default ChildB
