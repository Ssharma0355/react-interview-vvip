import React, { useState } from 'react'

function State() {
    let count = 0;
    const [counter, setCounter] = useState(0);

    const increase =()=>{
        setCounter(counter+1)
        setCounter(counter+1)

        setCounter(counter+1)

        setCounter(counter+1) 
        // Only 1 time increase
        setCounter(prevCount => prevCount +1)
        setCounter(prevCount => prevCount +1)
        setCounter(prevCount => prevCount +1)
        setCounter(prevCount => prevCount +1)
        setCounter(prevCount => prevCount +1)
        // changes as the count of time calling 
        setCounter(prevCount => prevCount +1)


        count++;
        console.log(count)
    }
  return (
    <div>
      <h1>{count}</h1>
      <h1>{counter}</h1>
      <button onClick={increase}>Click</button>
    </div>
  )
}

export default State
