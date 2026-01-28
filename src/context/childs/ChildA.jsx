import React, { useContext } from 'react'
import { NameContext } from '../Parent'

const ChildA = () => {
    const name = useContext(NameContext)
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default ChildA
