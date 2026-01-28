import React, { useMemo, useState } from 'react'

const Memo = () => {
    const[count, setCount] = useState(0);
    const[input, setInput] = useState(0);



    const expensiveCal = (input) =>{
        console.log("Calculation Started")
        for(let i=0; i<100000;i++){}
        return input*2
    }

    // const updatedValue = expensiveCal(input)
    const updatedValue = useMemo(()=> expensiveCal(input),[input])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increase Count</button>
        <h1>Calculated Value: {updatedValue}</h1>
        <input type="number" value={input} onChange={(e)=>setInput(e.target.value)} />
      
    </div>
  )
}

export default Memo
