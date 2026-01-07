import React, { useState } from 'react'

const UseStateHook = () => {
    // [currentValue, functionToUpdateValue] = useState(initialValue)
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
    </div>
  )
}

export default UseStateHook
