import React, { useCallback, useState } from 'react'

const WithCallBack = () => {
    const [count,setCount] = useState(0);

    const handleClick= useCallback(()=>{
        setCount(count+1)
    },[])
    // [] runs 1 time 
    // [count] re-create reference each time count gets updated
 

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleClick}>Increment</button>

        <br />

      
        <WithCallBack buttonName={"CLick meee"} handleClick={handleClick} />
      
    </div>
  )
}

export default WithCallBack
