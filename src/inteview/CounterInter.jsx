import React, { useState } from 'react'

const CounterInter = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1>{count}</h1>
        <br />
        <button onClick={()=> setCount(count+1)}>Increment</button>
        <br />
        <button onClick={()=> setCount(count-1)}>Decrement</button>
        <br />
        <button onClick={()=> setCount(0)}>reset</button>
      
    </div>
  )
}

export default CounterInter
