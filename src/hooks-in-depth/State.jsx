import React from 'react'

function State() {
    let count = 0;

    const increase =()=>{
        count++;
        console.log(count)
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>Click</button>
    </div>
  )
}

export default State
